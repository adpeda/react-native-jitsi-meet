# Important

**Do not use this package** in your project. Download and get ideas from this repository only if you want to use custom options in your Jitsi meet in react native application.

File changes:

1. RNJitsiMeetModule.java
2. RNJitsiMeetViewManager.m
3. index.ios.js
4. index.android.js

# react-native-jitsi-meet

See the main package and install it from github

Installation:
[https://github.com/skrafft/react-native-jitsi-meet](https://github.com/skrafft/react-native-jitsi-meet)

## Just for inspiration

```javascript
componentDidMount() {
  setTimeout(() => {
    const options = {
      room: 'String',
      token: 'String',
      audioMuted: false,
      audioOnly: false,
      videoMuted: false,
      subject: 'String',
    };
    const meetFeatureFlags = {};
    const url = 'https://meet.jit.si/helloRoom'
    const userInfo = {
      displayName: 'User',
      email: 'user@example.com',
      avatar: 'https:/gravatar.com/avatar/abc123',
    };
    JitsiMeet.call(url, userInfo, options, meetFeatureFlags);
    /* You can also use JitsiMeet.audioCall(url) for audio only call */
    /* You can programmatically end the call with JitsiMeet.endCall() */
  }, 1000);
}
```

## Useful Links

All Options :
[https://pub.dev/packages/jitsi_meet](https://pub.dev/packages/jitsi_meet)
