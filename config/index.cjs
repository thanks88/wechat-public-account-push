/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxbc500a15227c8b8f',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '726d403b01022ab2f8ac02155b3dc460',

  PROVINCE: '上海市',
  CITY: '上海市',

  USERS: [
    {
      // 想要发送的人的名字
      name: '多多宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'opi486-9Pwwj7-UVO4ZPNuPFIXqo',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'OQRsM_rhSvLFB22Xec_hmaZeHrobhoET1mfoGB8fb7Q',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '02-15',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '多多宝贝', year: '1997', date: '01-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '多多宝贝', year: '1997', date: '02-15',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '02-22',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-02-22' },
        // 结婚纪念日
        
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板


  

}

module.exports = USER_CONFIG

