
export const REGEX = {
  EMAIL: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, //email
  BUISNESSNAME: /^(?!\s)(?!.*\s$)(?=.*[a-zA-Z0-9])[a-zA-Z0-9 '~?!]{2,}$/, //for buisness name
  NAME: /^(?!\s)(?!.*\s$)(?=.*[a-zA-Z0-9])[a-zA-Z0-9 '~?!]{3,}$/, //for name
  OTP: /^[0-9]{8}$/,
  RC: RegExp(/^[0-9]{10}$/), //for business registration number
  TIN: RegExp(/^[0-9]{14}$/), //for tax identification number
  PASSWORD: /^[a-zA-Z]\w{6,1000}$/,
  WEBSITE: /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/,
  NUMBER: /[0-9]/,
  NATIONALIDNUMBER: RegExp(/^[0-9]{10}$/), //for national identification number
  RSA: RegExp(/^[0-9]{8}$/), //for RSA number
}

export const API = {
  URL: "http://organisation.stetis.com/organisation/ws/",
  USERSURL: "http://organisation.stetis.com/organisation/ws/",
    
  PEOPLE_URL: "http://organisation.stetis.com/people/ws/",

    PATHS:{
        DIAL_CODE:'dialcodes',
        AUTHENTICATION:'auth/actions',
        SIGNUP:'signup/actions',
        PROFILE: 'profile/page/',
        USERS: 'users/user/users/getall',
        INVITES_PAGINATION: 'invite/invites/get?',
        INVITES: 'invite/invites/getall',
        RESEND_INVITE:'invite/action',
        DELETE_USERS: 'users/action',
        SUSPEND_USERS: 'user/action',
        USERS_PAGINATION: 'user/users/get?',
        GET_DESIGNATION: 'settings/designation/designations/get?',
        DELETE_DESIGNATION: 'settings/actions',
        GET_RANK: 'settings/rank/ranks/get?',
        RANK_ACTIONS: 'settings/actions',
        ADD_SUBSCRIPTION_SUCCEEDED: 'subscription/actions',
        GET_SUBSCRIPTION_SUCCEEDED: 'subscription/subscriptions/get',
        GET_SUBSCRIPTIONS_SUCCEEDED: 'subscription/subscriptions/getall',
        INIT_SUBSCRIPTION_SUCCEEDED: 'subscription/initiate',
        VERIFY_TRANSACTION_SUCCEEDED: 'subscription/actions',
    
        GET_DESIGNATION: 'settings/designation/designations/get?',
        DELETE_DESIGNATION: 'settings/actions',

        GET_RANK: 'settings/rank/ranks/get?',
        RANK_ACTIONS: 'settings/actions',

        GET_TRANSFER : 'transfers',
        GET_DEPARTMENTS : 'business/department/departments/getall',
        GET_BRANCHES : 'business/branch/branches/getall',

        GET_PROMOTION : 'promotions',
        GET_PROMOTION_EMPLOYEES: 'employees',
        GET_PROMOTION_DESIGNATION: 'settings/designation/designations/getall',
        PROMOTION : 'promotions/actions',
        TRANSFER : 'transfers/actions',

        UPDATE_PARENT_INFO : "employees/edit/parentinfo/actions",

        ADD_EMPLOYEE: 'addemployee/actions',
        /** GET EMPLOYEE INFORMATION */
        GETEMPLOYEEINFO: 'employees/edit/getinfo',
        GETALLPERSONALINFO: 'employees/edit/personalinfo/request/getall',
        GETALLCONTACTINFO: 'employees/edit/contactinfo/request/getall',
    /** UPDATE PERSONAL INFORMATION REQUEST */
        PERSONAL_INFO_UPDATE_REQUEST: 'employees/edit/personalinfo/actions',
        PENDING_PERSONAL_INFO_UPDATE: 'employees/edit/personalinfo/requests?',
        ACT_ON_PERSONAL_INFO_UPDATE_REQUEST: 'employees/edit/personalinfo/actions',
        EMPLOYEE_PERSONAL_INFO_REQUESTS: 'employees/edit/personalinfo/history/',
        PERSONAL_INFO_UPDATE_REQUEST_HISTORY: 'employees/edit/personalinfo/history?',
        RESUBMIT_PERSONAL_INFO_UPDATE_REQUEST: 'employees/edit/personalinfo/actions',
    /** UPDATE CONTACT INFORMATION REQUEST */
        REQUEST_CONTACT_UPDATE:'employees/edit/contactinfo/actions',
        PENDING_CONTACT_UPDATE:'employees/edit/contactinfo/requests?',
        ACT_ON_CONTACT_INFO_UPDATE_REQUEST:'employees/edit/contactinfo/actions',
        EMPLOYEE_CONTACT_INFO_REQUESTS: 'employees/edit/contactinfo/history/',
        CONTACT_INFO_UPDATE_REQUESTS_HISTORY: 'employees/edit/contactinfo/history?',
        RESUBMIT_CONTACT_INFO_UPDATE_REQUEST: 'employees/edit/contactinfo/actions',
        GET_PARENT_INFO : "employees/edit/parentinfo/requests",
        GET_PARENT_INFO_DATA : "employees/edit/getinfo",

          /** PASSWORD RESET */
        INITIATE_PASSWORD_RESET:'reset/actions',
        VALIDATE_PASSWORD_RESET_LINK:'reset/actions',
        COMPLETE_PASSWORD_RESET:'reset/actions',
        /** BUSINESS INFORMATION */
        GET_BUSINESS_INFO:'business/businessinfo/get',
        UPDATE_BUSINESS:'business/actions',
        ADD_BRANCH:'business/actions',
        EDIT_BRANCH:'business/actions',
        DELETE_BRANCH: 'business/actions',
        GET_BRANCHES:'business/branch/branches/get?',
        GET_BRANCHES_WITHOUT_PAGINATION:'business/branch/branches/getall',
        REQUEST_BANK_INFO_UPDATE_SUCCEEDED: 'employees/edit/bankinfo/actions',
        GET_ALL_BANK_INFO_REQUEST_SUCCEEDED: 'employees/edit/bankinfo/requests',
        GET_BANK_INFO_REQUEST_SUCCEEDED: 'employees/edit/getinfo',
        ACT_ON_REQUEST_SUCCEEDED: 'employees/edit/bankinfo/actions',
        RESUBMIT_INFO_REQUEST_SUCCEEDED: 'employees/edit/bankinfo/actions',
        GET_ALL_INFO_SUCCEEDED: 'employees/edit/bankinfo/history',
        GET_HISTORY_BYID_SUCCEEDED: 'employees/edit/bankinfo/history',
        GET_BANK_REQUEST_BY_ID_SUCCEEDED: 'employees/edit/bankinfo/request'
    },
    status: {
        /* *** SERVER STATUS CODES *** */
        OK: '200',
        BAD_REQUEST: '400',
        INVALID_CREDENTIALS: '403',
        NOT_ACCEPTABLE: '406',
        NOT_FOUND: '404',
        OTP_EXPIRED: '405',
        INVALID_CLAIM: '490',
        UNAUTHORIZED:'401',
        ALGORITHM_MISMATCH: '492',
        TOKEN_EXPIRED: '498',
        COOKIE_REQUIRED: '499',
        INTERNAL_SERVER_ERROR: '500',
        NO_TOKEN_IN_STORAGE: '0',
        /* *** FRONT END STATUS CODES *** */
        NO_TOKEN_IN_STORAGE: '0',
        /* VALIDATE_INVITE */
        VALIDATE_INVITE_FAILED_INVALID_CODE: '1',
        VALIDATE_INVITE_FAILED_TO_PROCESS: '2',
        VALIDATE_INVITE_SUCCESS_HAS_ACCOUNT: '3',
        VALIDATE_INVITE_SUCCESS_NEW_ACCOUNT: '4',
      },
      actions: {
        SIGN_UP_VALIDATION: '1',
        AUTHENTICATION: '0',
        REFRESHTOKEN:'1',
        SIGNUP_COMPLETION: '2',
        PROFILE: '3',
        INVITE: '4',
        USERS: '5',
        UPDATE: '0',
        RESEND:'5',
        DELETE:'4',
        BUSINESS: '5',
        SERVICE: '8',
        SUBSCRIPTION: '7',
        TAX: '9',
        ACCOUNT: '8',
        PRODUCT_CATEGORY: '8',
        CHART_OF_ACCOUNT: '8',
        PRODUCT: '8',
        CONTACT: '6',
        ADD_SUBSCRIPTION_SUCCEEDED: '0',
        VERIFY_TRANSACTION_SUCCEEDED: '1',
        ADD_BRANCH: '1',
        EDIT: '2',
        ADD_DESIGNATION_ACTN : '0',
        DELETE_DESIGNATION_ACTN: '2',
        POST_DESIGNATION_ACTN : '1',

        ADD_RANK_ACTN: '3',
        UPDATE_RANK_ACTN: '4',
        DELETE_RANK_ACTN: '5',
        
        ADD_TRANSFER: '0',
        EDIT_TRANSFER: '1',
        DELETE_TRANSFER: '2',
        
        ADD_PROMOTION: '0',
        EDIT_PROMOTION: '1',
        DELETE_PROMOTION: '2',

        REQUEST_BANK_INFO_UPDATE_SUCCEEDED: '0',
        ACT_ON_REQUEST_SUCCEEDED: '1',
        RESUBMIT_INFO_REQUEST_SUCCEEDED: '2',
        INITIATE_UPLOAD: '0',
        VERIFY_TOKEN: '1',
        COMPLETE_UPLOAD: '2',
        APPROVE_UPLOAD: '3',
        RESUBMIT: '4',
        ADD_EMPLOYEE_HR: '5',
        REQUEST_UPDATE: '0',
        RESUBMIT_REQUEST_UPDATE: '2',
        ACT_ON_REQUEST:'1',
        EDIT_PARENTGUARDIANINFO_ACTN: '0'
      },
}

