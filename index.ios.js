/**
 * @providesModule JitsiMeet
 */

import { NativeModules, requireNativeComponent } from 'react-native';

export const JitsiMeetView = requireNativeComponent('RNJitsiMeetView');
export const JitsiMeetModule = NativeModules.RNJitsiMeetView;
const call = JitsiMeetModule.call;
const audioCall = JitsiMeetModule.audioCall;
JitsiMeetModule.call = (url, userInfo, subject, token) => {
  userInfo = userInfo || {};
  token = token || "";
  subject = subject || "";
  call(url, userInfo, subject, token);
}
JitsiMeetModule.audioCall = (url, userInfo, subject, token) => {
  userInfo = userInfo || {};
  token = token || "";
  subject = subject || "";
  audioCall(url, userInfo, subject, token);
}
export default JitsiMeetModule;


