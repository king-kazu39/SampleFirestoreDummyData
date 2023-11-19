// Firebase Admin SDKをインポート
const admin = require('firebase-admin');
// サービスアカウントキーをインポート（Firebase認証用）
const serviceAccount = require('../keys/serviceAccountKey.json');

// Firebase Admin SDKを初期化
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// Firestoreインスタンスの取得
const db = admin.firestore();

module.exports = db;