# Authentication-Authorization


 **This is simple Project  to prove my abilities in Auth using  JWT (JsonWebToken).**
 
 - what is  JWT ?
 JSON Web Token (JWT) is an open standard ([RFC 7519](https://tools.ietf.org/html/rfc7519)) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
 This information can be verified and trusted because it is digitally signed.
 JWTs can be signed using a secret (with the  **HMAC**  algorithm) or a public/private key pair using  **RSA**  or  **ECDSA**.
 Although JWTs can be encrypted to also provide secrecy between parties, we will focus on  _signed_  tokens. Signed tokens can verify the  _integrity_  of the claims contained within it,
 while encrypted tokens  _hide_  those claims from other parties.
 When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.