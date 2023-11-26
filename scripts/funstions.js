const db = require('../config/firebaseConfig');
const path = require('path');
const fs = require('fs');
const admin = require('firebase-admin');

// 指定したコレクション内のデータを全削除する関数
async function deleteCollectionData(collectionName) {
    try {
        const collectionRef = db.collection(collectionName);
        const snapshot = await collectionRef.get();

        if (snapshot.empty) {
            console.log('No documents found in ' + collectionName);
        } else {
            const batch = db.batch();
            snapshot.docs.forEach(doc => {
                batch.delete(doc.ref);
            });
            await batch.commit();
            console.log('All documents in ' + collectionName + ' have been deleted.');
        }
    } catch (error) {
        console.error('Error documents in ' + collectionName + ': ', error);
    }
}

// Firestoreにダミーデータを挿入する関数
async function insertData(filePath) {
    const collectionName = path.basename(filePath, '.json'); // ファイル名を取得(拡張子なし)
    const collectionRef = db.collection(collectionName);
    const batch = db.batch();

    // JSONファイルの内容を読み込む
    const documents = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    documents.forEach((docData, index) => {
        const docRef = collectionRef.doc(); // 新しいドキュメントIDを作成
        const timestamp = createTimestampWithOffset(index);
        batch.set(docRef, {
            ...docData,
            filePath,  // ドキュメントデータにファイルパスを含める
            createdAt: timestamp,
            updatedAt: timestamp
        });
    });

    await batch.commit();
    console.log('Data from ' + filePath + ' has been successfully inserted into ' + collectionName);
}

// 指定されたオフセット量でタイムスタンプを生成するメソッド
function createTimestampWithOffset(index, timerNumer = 1) {
    return admin.firestore.Timestamp.fromDate(
        new Date(new Date().getTime() + index * timerNumer * 60000)
    );
}

module.exports = {
    deleteCollectionData,
    insertData
};