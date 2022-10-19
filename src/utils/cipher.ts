// @ts-ignore-start
import { encrypt, decrypt } from 'crypto-js/aes';
// @ts-ignore
import { parse } from 'crypto-js/enc-utf8';
// @ts-ignore
import pkcs7 from 'crypto-js/pad-pkcs7';
// @ts-ignore
import ECB from 'crypto-js/mode-ecb';
// @ts-ignore
import UTF8 from 'crypto-js/enc-utf8';
// @ts-ignore-end

export interface EncryptionParams {
  key: string;
  iv: string;
}

/**
 * AES 加密解密
 */
export class AesEncryption {
  private key;
  private iv;

  constructor(opt: Partial<EncryptionParams> = {}) {
    const { key, iv } = opt;
    if (key) {
      this.key = parse(key);
    }
    if (iv) {
      this.iv = parse(iv);
    }
  }

  get getOptions() {
    return {
      mode: ECB,
      padding: pkcs7,
      iv: this.iv,
    };
  }

  encryptByAES(cipherText: string) {
    return encrypt(cipherText, this.key!, this.getOptions).toString();
  }

  decryptByAES(cipherText: string) {
    return decrypt(cipherText, this.key!, this.getOptions).toString(UTF8);
  }
}
