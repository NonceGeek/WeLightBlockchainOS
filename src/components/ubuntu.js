import React, { Component } from 'react';
import BootingScreen from './screen/booting_screen';
import Desktop from './screen/desktop';
import LockScreen from './screen/lock_screen';
import Navbar from './screen/navbar';
import ReactGA from 'react-ga';

export default class Ubuntu extends Component {
  constructor() {
    super();
    this.state = {
      screen_locked: false,
      bg_image_name: 'wall-2',
      booting_screen: true,
      shutDownScreen: false,
      remainingSeconds: 30,
      remainingSecondsInterval: null,
    };
  }

  componentDidMount() {
    this.getLocalData();
  }

  setTimeOutBootScreen = () => {
    //   will automatically login in 30 seconds
    setTimeout(() => {
      this.setState({ booting_screen: false });
      setTimeout(() => {
        this.setState({ remainingSeconds: 30 });
      }, 2000);
      clearInterval(this.state.remainingSecondsInterval);
    }, 30000);
    this.setIntervalRemainingSecond();
  };

  setIntervalRemainingSecond = () => {
    // set an interval and store the id of interval to the state
    this.setState({
      remainingSecondsInterval: setInterval(() => {
        //   every one second, --remainingSeconds
        this.setState({ remainingSeconds: this.state.remainingSeconds - 1 });
      }, 1000),
    });
  };

  loginWithoutAuth = (event) => {
    if (event.key === 'Enter') {
      this.setState({ booting_screen: false });
      //   slightly delay on bring back the default remainingSeconds
      setTimeout(() => {
        this.setState({ remainingSeconds: 30 });
      }, 2000);
      clearInterval(this.state.remainingSecondsInterval);
    }
  };

  loginWithAuth = (isLoggedIn) => {
    if (isLoggedIn) {
      this.setState({ booting_screen: false });
      setTimeout(() => {
        this.setState({ remainingSeconds: 30 });
      }, 2000);
      clearInterval(this.state.remainingSecondsInterval);
    }
  };

  getLocalData = () => {
    // Get Previously selected Background Image
    let bg_image_name = localStorage.getItem('bg-image');
    if (bg_image_name !== null && bg_image_name !== undefined) {
      this.setState({ bg_image_name });
    }

    let booting_screen = localStorage.getItem('booting_screen');
    if (booting_screen !== null && booting_screen !== undefined) {
      // user has visited site before
      this.setState({ booting_screen: false });
    } else {
      // user is visiting site for the first time
      localStorage.setItem('booting_screen', false);
      this.setTimeOutBootScreen();
    }

    // get shutdown state
    let shut_down = localStorage.getItem('shut-down');
    if (shut_down !== null && shut_down !== undefined && shut_down === 'true')
      this.shutDown();
    else {
      // Get previous lock screen state
      let screen_locked = localStorage.getItem('screen-locked');
      if (screen_locked !== null && screen_locked !== undefined) {
        this.setState({
          screen_locked: screen_locked === 'true' ? true : false,
        });
      }
    }
  };

  lockScreen = () => {
    // google analytics
    ReactGA.pageview('/lock-screen');
    ReactGA.event({
      category: `Screen Change`,
      action: `Set Screen to Locked`,
    });

    document.getElementById('status-bar').blur();
    setTimeout(() => {
      this.setState({ screen_locked: true });
    }, 100); // waiting for all windows to close (transition-duration)
    localStorage.setItem('screen-locked', true);
  };

  unLockScreen = () => {
    ReactGA.pageview('/desktop');

    window.removeEventListener('click', this.unLockScreen);
    window.removeEventListener('keypress', this.unLockScreen);

    this.setState({ screen_locked: false });
    localStorage.setItem('screen-locked', false);
  };

  changeBackgroundImage = (img_name) => {
    this.setState({ bg_image_name: img_name });
    localStorage.setItem('bg-image', img_name);
  };

  shutDown = () => {
    ReactGA.pageview('/switch-off');
    ReactGA.event({
      category: `Screen Change`,
      action: `Switched off the Ubuntu`,
    });

    document.getElementById('status-bar').blur();
    this.setState({ shutDownScreen: true });
    localStorage.setItem('shut-down', true);
  };

  turnOn = () => {
    ReactGA.pageview('/desktop');

    this.setState({ shutDownScreen: false, booting_screen: true });
    this.setTimeOutBootScreen();
    localStorage.setItem('shut-down', false);
  };

  render() {
    return (
      <div
        className='w-screen h-screen overflow-hidden'
        id='monitor-screen'
        onKeyDown={this.loginWithoutAuth}
        tabIndex='0'
      >
        <LockScreen
          isLocked={this.state.screen_locked}
          bgImgName={this.state.bg_image_name}
          unLockScreen={this.unLockScreen}
        />
        <BootingScreen
          visible={this.state.booting_screen}
          isShutDown={this.state.shutDownScreen}
          turnOn={this.turnOn}
          remainingSeconds={this.state.remainingSeconds}
          loginWithOAuth={this.loginWithAuth}
        />
        <Navbar lockScreen={this.lockScreen} shutDown={this.shutDown} />
        <Desktop
          bg_image_name={this.state.bg_image_name}
          changeBackgroundImage={this.changeBackgroundImage}
        />
      </div>
    );
  }
}
