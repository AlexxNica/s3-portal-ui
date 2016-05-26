export default {
  UTILS: {
    LOADING: 'Loading...',
    NAME: 'Name',
    CANCEL: 'Cancel',
    CREATE: 'Create',
    UPLOAD: 'Upload',
    OPEN: 'Open',
    DOWNLOAD: 'Download',
    DELETE: 'Delete',
    REFRESH: 'Refresh',
    OR: 'or',
  },
  VALIDATION: {
    REQUIRED: 'You left the field blank.',
    EMAIL: 'Your email must be look like an e-mail address.',
    MIN_LENGTH: 'Please enter at least {{ minlength }} characters.',
    MAX_LENGTH: 'Please enter no more than {{ maxlength }} characters.',
    MATCH: 'Please enter the same value again.',
  },
  VALIDATION: {
    REQUIRED: 'You left the field blank.',
    EMAIL: 'Your email must be look like an e-mail address.',
    MIN_LENGTH: 'Please enter at least {{ minlength }} characters.',
    MAX_LENGTH: 'Please enter no more than {{ maxlength }} characters.',
    MATCH: 'Please enter the same value again.',
  },
  SETTINGS: {
    ACCOUNT: 'My Account',
    BILLING: 'Billing & Cost Management',
    SECURITY: 'Security Credentials',
    SIGN_OUT: 'Sign Out',
    SIGN_OUT_CONFIRM_TITLE: 'Would you like to sign out without your upload?',
    SIGN_OUT_CONFIRM_MESSAGE: `You have in progress opreations
      or uploads and leaving now will cancel them.Still leaving?`,
    LEAVE: 'Leave',
    STAY: 'Stay',
  },
  BUCKET: {
    EMPTY_MESSAGE: 'Looks like you don\'t have any Bucket',
    CREATE_MESSAGE: 'Don\'t worry. It\'s easy to create one.',
    ERROR_MESSAGE: 'Oops, your connection seems off...',
    REFRESH_MESSAGE: 'Don\'t worry. You can refresh to try again.',
    DUPLICATE_MESSAGE: 'That bucket already exists! Please select a different name and try again.',
    CREATE: 'Create Bucket',
    DELETE: 'Delete Bucket',
    NAME: 'Bucket Name',
    CREATE_DESCRIPTION: `The name that you choose must be unique across
    existing bucket names in S3 Portal.`,
  },
  ACTION_NAVBAR: {
    ACTIONS: 'Actions',
    PROPERTIES: 'Properties',
    TRANSFERS: 'Transfers',
    NONE: 'None',
  },
  TOAST: {
    SIGN_IN_SUCCESS: 'Sign In Success!',
    SIGN_UP_SUCCESS: 'Sign Up Success!',
    SIGN_OUT_SUCCESS: 'Sign Out Success!',
    SIGN_OUT_FAILURE: 'Sign Out Failure!',
    CREATE_BUCKET_SUCCESS: 'Bucket {{ bucket }} are create success!',
    CREATE_BUCKET_FAILURE: 'Bucket {{ bucket }} are create failure, please try again!',
  },
  AUTH: {
    EMAIL: 'Email',
    PASSWORD: 'Password',
    RETYPE_PASSWORD: 'Retype Password',
    SIGN_IN: 'Sign In',
    SIGN_UP: 'Sign Up',
    HAVE_ACCOUNT: 'Already have an account?',
    HAVE_NOT_ACCOUNT: 'Don\'t have an account?',
    CREATE_ACCOUNT: 'Create an account',
    LOGIN_TO_YOUR_ACCOUNT: 'Log in to your account',
    ALREADY_EXIST: 'Someone already has that username. Try another?',
    SIGN_IN_INCORRECT: 'Your email or password was incorrect. Please try again.',
  },
  TRANSFER: {
    AUTO_CLEAR: 'Automatically clear finished transfers',
    TITLE: {
      UPLOAD: 'Upload {{ name }} to {{ bucket }}',
      DELETE: 'Delete {{ name }} from {{ bucket }}',
    },
    STATUS: {
      DELETING: 'Deleting',
      DELETED: 'Deleted',
      UPLOADING: 'Uploading',
      COMPLETED: 'Completed',
      RESUMING: 'Resuming',
    },
  },
  FILE: {
    CREATE_FOLDER: 'Create Folder',
    STORAGE_CLASS: 'Storage Class',
    SIZE: 'Size',
    LAST_MODIFIED: 'Last Modified',
    EMPTY: '',
    DO_ACTIONS: 'You can do the following actions',
    UPLOAD: 'Upload File',
    EMPTY_BUCKET: 'This bucket is empty',
    EMPTY_FOLDER: 'This folder is empty',
    UPLOAD_DESCRIPTION: `To upload files to S3 Portal,
    click Add Files. To remove files already selected,
    click the ✖ to the far right of the file name.`,
    ADD: 'Add Files',
    NUMBER_OF: 'Number of files:',
    TOTAL_SIZE: 'Total upload size:',
    FOLDER_NAME: 'Folder Name',
    FOLDER_DUPLICATED_MESSAGE: `That folder already exists!
    Please select a different name and try again.`,
    NEW_FOLDER: 'New folder',
  },
};
