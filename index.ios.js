/**
 * @providesModule JitsiMeet
 */

import { NativeModules, requireNativeComponent } from 'react-native';

export const JitsiMeetView = requireNativeComponent('RNJitsiMeetView');
export const JitsiMeetModule = NativeModules.RNJitsiMeetView;
const call = JitsiMeetModule.call;
const audioCall = JitsiMeetModule.audioCall;
JitsiMeetModule.call = (url, userInfo, subject, token, features) => {
  userInfo = userInfo || {};
  token = token || "";
  subject = subject || "";
  features = features || {};
  call(url, userInfo, subject, token, features);
}
JitsiMeetModule.audioCall = (url, userInfo, subject, token, features) => {
  userInfo = userInfo || {};
  token = token || "";
  subject = subject || "";
  features = features || {};
  audioCall(url, userInfo, subject, token, features);
}
export default JitsiMeetModule;


