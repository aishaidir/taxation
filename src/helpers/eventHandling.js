import { REGEX } from '../Constants/costants';

export const handleInputChange = (event, currentInputState) => {
  // handle custom inputs with type, name and value
  if (event.type === 'custom') {
    const {
      name, value, subprop,
    } = event;
    const newInputState = { ...currentInputState };
    if (subprop) {
      newInputState[name][subprop] = value; // state.name.subprop = value
    } else {
      newInputState[name] = value;
    }
    return newInputState;
  }

// const { EMAIL, BUISNESSNAME,PASSWORD, OTP, WEBSITE, NUMBER } = REGEX;
// export const handlePasswordValidate =(event, currentPasswordState)=>{
//     event.preventDefault();
//   }
//   const value = target.type === 'checkbox' ? target.checked : target.value;
//   const { name } = target;
//   const newInputState = { ...currentInputState };
//   newInputState[name] = value;
//   return newInputState;
};

const {
  EMAIL, BUISNESSNAME, PASSWORD, OTP, WEBSITE, NUMBER, RC, TIN, NAME, RSA, NATIONALIDNUMBER
} = REGEX;
export const handlePasswordValidate = (event, currentPasswordState) => {
  event.preventDefault();
  const {
    name, value,
  } = event.target;
  const newInputState = { ...currentPasswordState };
  newInputState[name] = value;


  if (!PASSWORD.test(newInputState.password)) {
    return {
      newInputState,
      passwordError: true,
    };
  }
  return {
    newInputState,
  };
};


export const handleInputhelper = (event, currentInputState) => {
  const {
    name, value,
  } = event.target;
  const newInputState = { ...currentInputState };
  newInputState[name] = value;
  switch (event.target.name) {
    case 'email':
      event.preventDefault();
      if (!EMAIL.test(newInputState.email)) {
        return {
          emailError: true,
          newInputState,
        };
      }
      return {
        emailError: false,
        newInputState,
      };

    case 'nationalIdNumber':
      event.preventDefault();
      if (!NATIONALIDNUMBER.test(newInputState.nationalIdNumber)) {
        return {
          nationalIdNumberError: true,
          newInputState,
        };
      }
      return {
        nationalIdNumberError: false,
        newInputState,
      };
    case 'rsa':
      event.preventDefault();
      if (!RSA.test(newInputState.rsa)) {
        return {
          rsaError: true,
          newInputState,
        };
      }
      return {
        rsaError: false,
        newInputState,
      };
    case 'name':
      event.preventDefault();
      if (!BUISNESSNAME.test(newInputState.name)) {
        return {
          nameError: true,
          newInputState,
        };
      }
      return {
        nameError: false,
        newInputState,
      };
    case 'surname':
      event.preventDefault();
      if (!NAME.test(newInputState.surname)) {
        return {
          surnameError: true,
          newInputState,
        };
      }
      return {
        surnameError: false,
        newInputState,
      };
    case 'firstname':
      event.preventDefault();
      if (!NAME.test(newInputState.firstname)) {
        return {
          firstnameError: true,
          newInputState,
        };
      }
      return {
        firstnameError: false,
        newInputState,
      };
    case 'middlename':
      event.preventDefault();
      if (!NAME.test(newInputState.middlename)) {
        return {
          middlenameError: true,
          newInputState,
        };
      }
      return {
        middlenameError: false,
        newInputState,
      };
    case 'gender':
      if (newInputState.gender === '') {
        return {
          genderError: true,
          newInputState,
        };
      }
      return {
        genderError: false,
        newInputState,
      };
    case 'maritalStatus':
      if (newInputState.maritalStatus === '') {
        return {
          maritalStatusError: true,
          newInputState,
        };
      }
      return {
        maritalStatusError: false,
        newInputState,
      };
    case 'nationality':
      if (newInputState.nationality.length === '') {
        return {
          nationalityError: true,
          newInputState,
        };
      }
      return {
        nationalityError: false,
        newInputState,
      };
    case 'stateOfOrigin':
      if (newInputState.stateOfOrigin === '') {
        return {
          stateOfOriginError: true,
          newInputState,
        };
      }
      return {
        stateOfOriginError: false,
        newInputState,
      };
    case 'lga':
      if (newInputState.lga === '') {
        return {
          lgaError: true,
          newInputState,
        };
      }
      return {
        lgaError: false,
        newInputState,
      };

    case 'dob':
      if (newInputState.dob === '') {
        return {
          dobError: true,
          newInputState,
        };
      }
      return {
        dobError: false,
        newInputState,
      };

      case 'comment':
        if (newInputState.comment === '') {
          return {
            commentError: true,
            newInputState,
          };
        }
        return {
          commentError: false,
          newInputState,
        };
    case 'password':
      if (!PASSWORD.test(newInputState.password)) {
        return {
          passwordError: true,
          newInputState,
        };
      }

      return {
        passwordError: false,
        newInputState,
      };
    case 'size':
      if (newInputState.size === '') {
        return {
          businessSizeError: true,
          newInputState,
        };
      }
      return {
        businessSizeError: false,
        newInputState,
      };

    case 'website':
      if (!WEBSITE.test(newInputState.website)) {
        return {
          websiteError: true,
          newInputState,
        };
      }
      return {
        websiteError: false,
        newInputState,
      };
    case 'pob':
      if (newInputState.pob === '') {
        return {
          pobError: true,
          newInputState,
        };
      }
      return {
        pobError: false,
        newInputState,
      };
    case 'address':
      if (newInputState.address === '') {
        return {
          addressError: true,
          newInputState,
        };
      }
      return {
        addressError: false,
        newInputState,
      };
    case 'religion':
      if (newInputState.religion === '') {
        return {
          reliogionError: true,
          newInputState,
        };
      }
      return {
        religionError: false,
        newInputState,
      };

    case 'type':
      if (newInputState.type === '') {
        return {
          businessTypeError: true,
          newInputState,
        };
      }

      return {
        businessTypeError: false,
        newInputState,
      };
    case 'tin':
      if (!TIN.test(newInputState.tin)) {
        return {
          tinError: true,
          newInputState,
        };
      }
      return {
        tinError: false,
        newInputState,
      };
    case 'regNo':
      if (!RC.test(newInputState.regNo)) {
        return {
          regNoError: true,
          newInputState,
        };
      }

      return {
        regNoError: false,
        newInputState,
      };
    case 'otp':
      if (!OTP.test(newInputState.otp)) {
        return {
          otpError: true,
          newInputState,
        };
      }

      return {
        otpError: false,
        newInputState,
      };

    default:
      return newInputState;
  }
};
