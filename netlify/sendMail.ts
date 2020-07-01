require('dotenv').config()
import nodemailer from 'nodemailer'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept'
}

exports.handler = async evt => {
  if (evt.httpMethod === 'POST') {
    const smtpConfig = {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_ADDLESS,
        pass: process.env.GMAIL_PASSWORD
      }
    }

    const { name, email, tel, messaage } = JSON.parse(evt.body)
    // if (!name || !email || !message) {
    // console.log('入力されていない必須項目がある')
    // return {
    //   headers: headers,
    //   statusCode: 400,
    //   body: 'リクエスト内容に不足があります。'
    // }
    // }

    let transporter = nodemailer.createTransport(smtpConfig)

    // transporter.sendMail({
    //   from: '"跡部達也_Atobe_Tastuya" <atobe0104@gmail.com>',
    //   to: email,
    //   subject: '【自動返信】お問い合わせありがとうございました。',
    //   text:
    //     'お問い合わせありがとうございました。見に覚えのないメールだったら削除していただけますと幸いです。',
    //   html:
    //     '<p>フロントエンジニアの跡部です、お問い合わせありがとうございました。<br>見に覚えのないメールだったら削除していただけますと幸いです。</p>'
    // })

    transporter.sendMail({
      from: `跡部達也_Atobe_Tastuya <${process.env.GMAIL_ADDLESS}>`,
      to: process.env.GMAIL_ADDLESS,
      subject: 'お問い合わせがあります。',
      text: '',
      html: '<b>ポートフォリオサイトからこんなお問い合わせが来てます</b>'
    })
  }
  return {
    headers: headers,
    statusCode: 200
  }
}
