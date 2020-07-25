/**
 * @providesModule JitsiMeet
 */

import { NativeModules, requireNativeComponent } from 'react-native';

export const JitsiMeetView = requireNativeComponent('RNJitsiMeetView');
export const JitsiMeetModule = NativeModules.RNJitsiMeetView;
const call = JitsiMeetModule.call;
const audioCall = JitsiMeetModule.audioCall;
<<<<<<< HEAD
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
=======
JitsiMeetModule.call = (url, userInfo, meetOptions, meetFeatureFlags) => {
  userInfo = userInfo || {};
  call(url, userInfo, meetOptions, meetFeatureFlags);
};
JitsiMeetModule.audioCall = (url, userInfo) => {
  userInfo = userInfo || {};
  audioCall(url, userInfo);
};
>>>>>>> ac60523a79647e8f2839831a7b65d321cab15aff
export default JitsiMeetModule;
