
// //消息模版
// if (null != accessToken) {
// 			int result = 0;
// 			// 拼装消息模版的url
// 			String url = "https://api.weixin.qq.com/cgi-bin/message/template/send?access_token="+accessToken;
// 			// 将模版对象转换成json字符串
// 			String p1 = "{\"value\": \"您好，您已在微信端成功登录！\",\"color\": \"#173177\"}";
// 			String p2 = "{\"value\": \""+loginUser+"\",\"color\": \"#FF0000\"}";
// 			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
// 			Date now = new Date();
// 			String p3 = "{\"value\": \""+sdf.format(now)+"\",\"color\": \"#173177\"}";
// 			String p4 = "{\"value\": \"感谢使用，请注意账号安全。\",\"color\": \"#173177\"}";
// 			String str = "{\"first\": "+p1+",\"keyword1\": "+p2+",\"keyword2\": "+p3+",\"remark\": "+p4+"}";
// 			String json = "{\"touser\": \""+openId+"\",\"template_id\": \"Or8BsYLaYU-2YiioT2w7dUs4t2xAwD1R0xLNR_aQBOg\",\"url\": \"http://weixin.qq.com/download\",\"topcolor\": \"#FF0000\",\"data\": "+str+"}";
// 			// 调用接口
// 			JSONObject jsonObject = WeixinUtil.httpRequest(url, "POST", json);
// 			if (null != jsonObject) {
// 				if (0 != jsonObject.getInt("errcode")) {
// 					result = jsonObject.getInt("errcode");
// 					log.error("消息模版操作失败 errcode:{} errmsg:{}", jsonObject.getInt("errcode"), jsonObject.getString("errmsg"));
// 				}
// 			}
// 			// 判断客服操作结果
// 			if (0 == result) {
// 				log.info("消息模版操作成功！");
// 			} else {
// 				log.info("消息模版操作失败，错误码：" + result);
// 			}
// 		}
// //发送消息
// String openId = "XXXXX";
// 			URL url;
// 			try {
// 				url = new URL("https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=" + accessToken)；
// 				HttpURLConnection http = (HttpURLConnection) url.openConnection();
// 				http.setRequestMethod("POST");
// 				http.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
// 				http.setDoOutput(true);
// 				http.setDoInput(true);
// 				http.connect();
// 				OutputStream os = http.getOutputStream();
// 				String json = "{\"touser\": \""+openId+"\",\"msgtype\": \"text\", \"text\": {\"content\": \""+content+"\"}}";
// 				os.write(json.getBytes("UTF-8"));// 传入参数
// 				InputStream is = http.getInputStream();
// 				int size = is.available();
// 				byte[] jsonBytes = new byte[size];
// 				is.read(jsonBytes);
// 				String result = new String(jsonBytes, "UTF-8");
// 				System.out.println("发送消息请求返回结果:"+result);
// 				os.flush();
// 				os.close();
// 			} catch (Exception e) {
// 				e.printStackTrace();
// 			}
