import JSEncrypt from 'jsencrypt/bin/jsencrypt.min';
export const setEncrypt = (username) => {
  let jse = new JSEncrypt();
  jse.setPublicKey(`-----BEGIN PUBLIC KEY-----
      MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDN8urY9QeFqbZNq4YHdHNv80qz
      9jzVhZnjrmvxnKqSnIflbs28+ccFuNFCnM91pyAaFraBRex2se0+5dFU7x/F8MiK
      53yWXQ53Z/W0Jez5nuoEMUnWROdjn7X/tXnUE5k3+cjr7GyLorimuhXSocY09zMo
      pr99nV6jUF3n0xtZbQIDAQAB
      -----END PUBLIC KEY-----`);
  // 设置需要加密的字符串
  return jse.encrypt(username);
}


