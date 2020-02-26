// import React, { Component } from 'react'
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import Slide from '@material-ui/core/Slide';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import IconButton from '@material-ui/core/IconButton';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
// import { Button, Fab, CircularProgress, Grow, FormHelperText } from '@material-ui/core';
// import { handleInputChange as handlePhoneNumberInputHelper, handleInputhelper } from '../../helpers/eventHandling';
// import { ArrowRight } from '../../components/Svg';
// import PhoneInput from '../../components/formInputs/PhoneInput';
// import { changeToOptionItem, getUserCountryData } from '../../helpers/handleCountryCode';
// import { Countries } from '../../services/countries';
// import {ERROR_MESSAGE} from '../../Constants/error.constants';
// import MessageCard from '../../components/MessageCard';
// import Loader from 'react-loader-spinner'
// import { userLogin } from '../../helpers/authentication.helper';
// import { connect } from 'react-redux'
// import { history } from '../../App';
// import PropTypes from 'prop-types';
// import Media from "react-media";
// import styles from '../../styles/Authentication.styles'
// // import { API } from '../../Constants/costants';
// import { initUserSignUp, signUpOtpValidation } from '../../helpers/initSignUp.helper';
// import { validatePhone } from '../../helpers/ValidationHelper';
// import { Fonts, Colors } from '../../styles/themes';

// const countries = changeToOptionItem(Countries);
// const DEFAULT_AREA_CODE = countries[0].id;

// export class Authentication extends Component {
//   state = {
//     isMobile:'',
//     countryData:[],
//     loginInputs: {
//       email: '',
//       password: '',
//     },
//     initSignupInputs: {
//       name: '',
//       email: '',
//       phone: {
//         code: DEFAULT_AREA_CODE,
//         number: '',
//       },
//     },
//     otpInputs: {
//       otp: '',
//     },
//     /* form errors */
//     signinFormError: false,
//     signupFormError: false,
//     otpFormError: false,
//     nextPhase: false,
//     loginbtnIsLoading: false,
//     loading: false,
//     signupChecked: false,
//     password: '',
//     showPassword: false,
//     nameError: false,
//     phoneError: false,
//     emailError: false,
//     usernameError: false,
//     otpError: false,
//     passwordError: false,
//     formStatus: false,
//     serverError: false
//   }

//   componentDidMount(){
//     const {isLoggedIn}=this.props.authState
//     if (isLoggedIn) return history.push('/');
//   }
  
//   componentDidUpdate = (prevProps) => {
//     if (prevProps.initSignUpSuccess !== this.props.initSignUpSuccess) {
//       if (this.props.initSignUpSuccess === true) {
//         this.setState({ nextPhase: this.props.initSignUpSuccess })
//       }
//       if (prevProps.OtpServerError !== this.props.OtpServerError) {
//         if (this.props.OtpServerError===true) {
//           this.setState({ otpFormError: true }, () =>
//             this.ErrorTimer = setTimeout(() => this.setState({ otpFormError: false }), 3500))
//         }
//       }

//     }
//   }
//   componentWillUnmount = () => {
//     clearTimeout(this.timer, this.ErrorTimer)

//   }

//   spinButton = () => {
//     if (!this.state.loading) {
//       this.setState(
//         { loading: true }, () => {
//           this.timer = setTimeout(() => {
//             this.setState({
//               loading: false, //fab button loader
//               // nextPhase: true, //set it to  true to show otp page
//             });
//           }, 3000);
//         },
//       );
//     }
//   }

  
//   initSignupdataHandler = (data) => {
//     const { initSignUpSuccess, initUserSignUp } = this.props;
//     const code = data['phone']['code']
//     const country = getUserCountryData(code) //to get the user country data
    
//     const dataInput= {
//       'email':data['email'],
//       'business-name':data['name'],
//       'phone':data['phone']['number'],
//       ...country,
//        }
//     initUserSignUp(dataInput);
//     setTimeout(() => {
//       if (initSignUpSuccess) {
//         return this.setState({ nextPhase: initSignUpSuccess })
//       }
//     }, 2000)
//   }
//   handleButtonClick = () => {
//     this.spinButton();
//     if (!this.state.nextPhase) {
//       this.handlesubmitInitSignUp()
//     } else {
//       this.handleSubmitOtp()
//     }
//   };

//   showLoader = () => {
//     this.setState({ loginbtnIsLoading: true });
//   }

//   handleClickShowPassword = () => {
//     this.setState(state => ({ showPassword: !state.showPassword }));

//   };

//   handleToggleForm = () => {
//     this.setState(prevState => ({ formStatus: !prevState.formStatus }));
//     if (this.state.formStatus) {
//       this.setState({ signupChecked: false, emailError: false, nameError: false })
//     } else {
//       /* 
//       when toggled to sign-in unmount the otp form 
//       by setting next phase to false
//        */
//       this.setState({ signupChecked: true, nextPhase: false })
//     }
//   }


//   handlePhoneInputChange = (event) => {
//     const initSignupInputs = handlePhoneNumberInputHelper(event, this.state.initSignupInputs)
//     const { phoneError } = validatePhone(initSignupInputs['phone']['number'], initSignupInputs['phone']['code'])
//     this.setState({ initSignupInputs, phoneError })
//   }
//   handleinitSignupInputChange = (event) => {
//     const { newInputState, nameError, emailError } = handleInputhelper(event, this.state.initSignupInputs)
//     this.setState({
//        initSignupInputs: newInputState},()=>{
//          if(nameError !==undefined){
//            this.setState({nameError:nameError})
//          }
//          if(emailError !==undefined){
//            this.setState({emailError:emailError})
//          }
//        })
//   }

//   handleOtpInputChange = (event) => {
//     const { newInputState, otpError } = handleInputhelper(event, this.state.otpInputs)
//     this.setState({ otpInputs: newInputState, otpError })
//   }
//   handleSignInChange = (event) => {
//     const { newInputState, passwordError, emailError } = handleInputhelper(event, this.state.loginInputs);
//     this.setState({ loginInputs: newInputState},()=>{
//       if(emailError !==undefined){
//         this.setState({usernameError: emailError})
//       }
//       if(passwordError !==undefined){
//         this.setState({passwordError})
//       }
//     });
//   }


//   /*
//    handle Submit buttons here
//    */

//   handleSubmitOtp = () => {
//     const { otpInputs, otpError } = this.state;
//     if (!otpInputs['otp'] || otpError) {
//       this.setState({ otpFormError: true }, () =>
//         this.ErrorTimer = setTimeout(() => this.setState({ otpFormError: false }), 3500))
//     } else {
//       this.props.signUpOtpValidation(otpInputs.otp)
//     }
//   }

//   handlesubmitInitSignUp = () => {
//     const { nameError, emailError, phoneError, initSignupInputs } = this.state
//     if (!initSignupInputs['email']
//       || !initSignupInputs['name']
//       || nameError
//       || emailError
//       || !initSignupInputs['phone']['number']
//       || phoneError) {
//       this.setState({ signupFormError: true, nextPhase: false }, () =>
//         this.ErrorTimer = setTimeout(() => this.setState({ signupFormError: false }), 3500))
//     } else {
//       this.initSignupdataHandler(initSignupInputs)
//       // this.setState({ nextPhase: true })

//     }
//   }


//   handleSigninButton = (e) => {
//     e.preventDefault();
//     const { userLogin } = this.props;
//     const { loginInputs, usernameError, passwordError } = this.state;
//     if ((!loginInputs['email'] || !loginInputs['password']) || (usernameError || passwordError)) {
//       this.setState({ signinFormError: true }, () =>
//         this.ErrorTimer = setTimeout(() => this.setState({ signinFormError: false }), 3500)
//       )
//     } else {
//       let credentials = { email: loginInputs['email'], password: loginInputs['password'] }
//       userLogin(credentials)

//     }
//   }
//   /*
//   end handle submit buttons
//   */
//   RenderOtpError = () => {
//     const { otpError, otpFormError, otpInputs } = this.state
//     if (otpFormError) {
//       if (!otpInputs['otp']) return <MessageCard type="error" Message={ERROR_MESSAGE.OTP_ERROR.EMPTY} />
//       if (otpError) return <MessageCard type='error' Message={ERROR_MESSAGE.OTP_ERROR.INCORRECT} />
//    return <MessageCard type='error' Message={ERROR_MESSAGE.OTP_ERROR.INCORRECT} />
//     }
//   }
//   RenderSignUpError = () => {
//     const { nameError, initSignupInputs, phoneError, emailError } = this.state
//     if (this.state.signupFormError) {
//       if (nameError || !initSignupInputs['name']) return <MessageCard type="error" Message={ERROR_MESSAGE.SIGN_UP_ERROR.INVALID_NAME} />
//       if (emailError || !initSignupInputs['email']) return <MessageCard type="error" Message={ERROR_MESSAGE.SIGN_UP_ERROR.INVALID_EMAIL} />
//       if (phoneError || !initSignupInputs['phone']['number']) return <MessageCard type='error' Message={ERROR_MESSAGE.SIGN_UP_ERROR.iNVALID_PHONE} />
//     }
//   }
 
//   renderServerError = (errorMessage) =>{
//     return <MessageCard type="error" Message={errorMessage}/>
//   }
//   RenderSignInError = () => {
//     if (this.state.signinFormError) return <MessageCard type="error" Message={ERROR_MESSAGE.SIGN_IN_INVALID} />
//   }

//   render() {
//     const {
//       formStatus,
//       loading,
//       nextPhase,
//       passwordError,
//       usernameError,
//       signupChecked,
//       emailError,
//       nameError,
//       signinFormError
//     } = this.state;
//     const { classes } = this.props;
    
//     const {isLoading,loginError,loginErrorMessage} =this.props.authState;
//     const { textField, resize, phoneInputprops } = classes;
//     const renderformToggle = () => {
//       const signUpText = <p className="notice-text" style={{color:Colors.grey,fontFamily:Fonts.primary}} >Don't have an account? <span className="notice-btn-text" style={{color:Colors.blue}} onClick={this.handleToggleForm}> Sign Up</span></p>
//       const signIntext = <p className="notice-text" style={{color:Colors.grey,fontFamily:Fonts.primary}}>Already have an account? <span className="notice-btn-text" style={{color:Colors.blue}} onClick={this.handleToggleForm}> Sign In</span></p>
//       return (
//         <div>{formStatus ? signIntext : signUpText}</div>
//       )
//     }

//     /* render otp form */
//     const validatOtpform = () => {
//       const { initSignupInputs,otpError } = this.state
//       const {otpErrorMessage,OtpServerError} = this.props;
//       return (
//         <div>
//           <div style={{ position: "relative", top: -35 }}>
//             {this.RenderOtpError()}
//            {OtpServerError && this.renderServerError(otpErrorMessage)}
//           </div>
//           <Slide in={nextPhase} direction='left' mountOnEnter unmountOnExit>
//             <>
//               <p className="notice-text-otp" style={{color:Colors.grey,fontFamily:Fonts.primary}}>Enter the One Time Password (OTP) that was sent to <span>{initSignupInputs.phone['code'] + initSignupInputs.phone['number'].substring(1)}</span></p>
//               <FormControl className={classNames(classes.margin, classes.textField)}>
//                 <InputLabel className={phoneInputprops} htmlFor="password">OTP</InputLabel>
//                 <Input
//                   className={classes.resize}
//                   id="otp"
//                   type={this.state.showPassword ? 'text' : 'password'}
//                   value={this.state.otpInputs.otp}
//                   error={OtpServerError||otpError}
//                   onChange={this.handleOtpInputChange}
//                   name='otp'
//                   endAdornment={
//                     <InputAdornment position="end">
//                       <IconButton aria-label="Toggle otp visibility"
//                         onClick={this.handleClickShowPassword}>
//                         {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
//                       </IconButton>
//                     </InputAdornment>
//                   }
//                 />
//               {(OtpServerError||otpError) && <FormHelperText className={classes.FormHelperText} >Incorrect OTP</FormHelperText>}
//               </FormControl>
//               <Button variant="text" className="resend-otp" style={{color:Colors.blue}}><span >RESEND OTP?</span></Button>
//             </>
//           </Slide>
//         </div>
//       )
//     }
//     /* render initial signup form */
//     const initialSignUp = () => {
//       const {initSignUpErrorMessage,initSignUpError}= this.props;
//       const {initSignupInputs}= this.state;
//       return (
//         <div className="signin-container">
//           <div style={{ position: 'relative', top: -35 }}>
//             {this.RenderSignUpError()}
//             {initSignUpError && this.renderServerError(initSignUpErrorMessage)}
//           </div>
//           <form >
//             <FormControl className={classNames(textField, classes.dense)}>
//               <InputLabel className={phoneInputprops} htmlFor="name">Name</InputLabel>
//               <Input className={resize} id="name" name="name" error={nameError} value={initSignupInputs.name} onChange={this.handleinitSignupInputChange} />
//               {nameError && <FormHelperText className={classes.FormHelperText} >{initSignupInputs.name.length ? 'Please enter your buisness name':'Name field is required' }</FormHelperText>}
//             </FormControl>
//             <FormControl className={classNames(textField, classes.dense)}>
//               <InputLabel className={phoneInputprops} htmlFor="email">Email</InputLabel>
//               <Input id="email" name="email" className={resize} error={emailError} value={initSignupInputs.email} onChange={this.handleinitSignupInputChange} />
//               {emailError && <FormHelperText className={classes.FormHelperText} >{initSignupInputs.email.length ? 'Please enter a valid email address':'Email field is required' }</FormHelperText>}
//             </FormControl>
//             <FormControl className={classNames(textField, classes.dense)}>
//               <PhoneInput borderless style={{ width: 70 }} phoneState={this.state.initSignupInputs.phone} countries={countries} onChange={this.handlePhoneInputChange} />
//               {this.state.phoneError && <FormHelperText className={classes.FormHelperText} >{initSignupInputs.phone.number.length?'Invalid country phone number':''}</FormHelperText>}
//             </FormControl>
//           </form>
//         </div>
//       )
//     }
//     /*Render Sign up and otp*/
//     const RenderSignUpForm = () => {
//       const { initSignUpLoading, OTPisLoading } = this.props;
//       return (
//         <Slide direction="left" in={signupChecked} mountOnEnter unmountOnExit>
//           <div>
//             {nextPhase ? validatOtpform() : initialSignUp()}
//             <div className="nextButton">
//               <Fab className={classes.fab} onClick={this.handleButtonClick}>
//                 {loading || initSignUpLoading || OTPisLoading ? <Loader type="ThreeDots"
//                   color="#fff"
//                   height="10"
//                   width="20" /> : <ArrowRight />}
//               </Fab>
//               {(loading ||initSignUpLoading) && <CircularProgress size={55} className={classes.fabProgress} />}
//             </div>
//           </div>
//         </Slide>
//       )
//     }
//     const RenderSignInForm = () => {
//       return (
//         <Grow {...(!formStatus ? { timeout: 1000 } : {})} style={{transformOrigin: '0 0 0'}}  in={!formStatus}>
//         <div className="signin-container">
//         <Media query="(max-width: 520px)" onChange={matches => this.setState({ isMobile: matches })
//         } />
//         <div style={{ position: 'relative', top: -35 }}>
//           {this.RenderSignInError()}
//           {loginError && this.renderServerError(loginErrorMessage)}
//         </div>
//           <form onSubmit={this.handleSigninButton}>
//             <FormControl className={classNames(textField,classes.dense,this.state.isMobile? classes.mobileTextField:'')}>
//               <InputLabel className={phoneInputprops} htmlFor="email">Username</InputLabel>
//               <Input id="email" name="email" className={resize} error={usernameError} value={this.state.loginInputs.email} onChange={this.handleSignInChange} />
//               {usernameError && <FormHelperText className={classes.FormHelperText} >Please enter a username (example@payroll.com)</FormHelperText>}
//             </FormControl>

//             <FormControl className={classNames(classes.margin, classes.textField,this.state.isMobile? classes.mobileTextField:'')}>
//               <InputLabel className={phoneInputprops} htmlFor="password">Password</InputLabel>
//               <Input
//                 className={resize}
//                 id="password"
//                 type={this.state.showPassword ? 'text' : 'password'}
//                 value={this.state.loginInputs.password}
//                 error={passwordError}
//                 onChange={this.handleSignInChange}
//                 name='password'
//                 endAdornment={
//                   <InputAdornment position="end" style = {{paddingBottom: 7}}>
//                     <IconButton aria-label="Toggle password visibility"
//                       onClick={this.handleClickShowPassword}>
//                       {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
//                     </IconButton>
//                   </InputAdornment>
//                 }
//               />
//                {passwordError && <FormHelperText className={classes.FormHelperText} >{!this.state.loginInputs.password.length? 'Password field is required':'Enter a valid password'}</FormHelperText>}
//             </FormControl>
//             <Button 
//             style={{
//               fontSize:12,
//               textTransform:"initial",
//               display:'table',
//               cursor:'pointer',
//               // paddingLeft:30,
//               marginTop:5,
//               marginLeft:24,
//               background:'transparent',
//               fontFamily:Fonts.primary,color:Colors.blue
//             }}
//             color="primary" 
//             href ="/organisation/ws/reset/initiate-password-reset"
//             >Forgot Password?
//             </Button>
//             <Button
//               disableRipple={isLoading}
//               disableFocusRipple={isLoading}
//               type="submit"
//               variant="contained"
//               disabled={isLoading || signinFormError}
//               className={classNames(classes.button, this.state.isMobile? classes.mobileButton:'')}
//               style={{
//                 backgroundColor: isLoading || signinFormError ? Colors.blueSecondary : ''
//               }}
//             >
//               <span>{isLoading ||signinFormError ? <Loader type="ThreeDots"
//                 color="#f4f4f4"
//                 height="30"
//                 width="30" /> : 'Sign In'}
//               </span>
//             </Button>
//           </form>
//         </div>
//         </Grow>
//       )
//     }

//     const renderForm = () => {
//       return (
//         <>{formStatus ? RenderSignUpForm() : RenderSignInForm()}</>
//       )
//     }
//     return (
//       <div>
//         <h4 className="form-header" style={{fontFamily:Fonts.primary, color:Colors.blue}}>{formStatus ? <span>Sign Up</span> : <span>Sign In</span>}</h4>
//         {renderForm()}
//         {renderformToggle()}
//       </div>
//     )
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     authState:state.isAuthenticated,
//     /***sign up module global state***/
//     initSignUpErrorMessage: state.initSignup.errorMessage,
//     initSignUpSuccess: state.initSignup.initSignUpSuccess,
//     initSignUpLoading: state.initSignup.iniSignUpisLoading,
//     initSignUpError: state.initSignup.initSignUpError,
//     /***sign up OTP validation global state**/
//     OtpServerError: state.initSignup.OtpError,
//     otpErrorMessage:state.initSignup.otpErrorMessage,
//     signUpOtpSuccess: state.initSignup.signUpOtpSuccess,
//     OTPisLoading: state.initSignup.OTPisLoading,
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     userLogin: (user) => dispatch(userLogin(user)),
//     initUserSignUp: (credential) => dispatch(initUserSignUp(credential)),
//     signUpOtpValidation: (otp) => dispatch(signUpOtpValidation(otp))
//   }
// }

// Authentication.propTypes = {
//   classes: PropTypes.object.isRequired,
//   RenderOtpError:PropTypes.func.isRequired,
//   initSignupdataHandler: PropTypes.func.isRequired,
// }
// export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Authentication))

import React, { Component } from 'react'
 class Authentication extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Authentication
