function Translate(){}

Translate.prototype.get = function(term){
  return languages[term];
}

const languages = {
  // UTILS
  'UTILS_LOADING': '載入中...',
  'UTILS_NAME': '名稱',
  'UTILS_CANCEL': '取消',
  'UTILS_CREATE': '建立',
  'UTILS_UPLOAD': '上傳',
  'UTILS_OPEN': '開啟',
  'UTILS_DOWNLOAD': '下載',
  'UTILS_DELETE': '刪除',
  'UTILS_REFRESH': '重新整理',
  'UTILS_OR': '或',
  'UTILS_CONFIRM': '確定',
  // VALIDATION
  'VALIDATION_REQUIRED': '此欄位不得為空。',
  'VALIDATION_EMAIL': '此欄位必須符合電子郵件格式。',
  'VALIDATION_MIN_LENGTH': /^此欄位不得小於.*個字元。$/,
  'VALIDATION_MAX_LENGTH': '此欄位不得大於 {{ maxlength }} 個字元。',
  'VALIDATION_MATCH': '請輸入與前一個欄位相同的值。',
  // SETTINGS
  'SETTINGS_ACCOUNT': '我的帳戶',
  'SETTINGS_BILLING': '付款與費用管理',
  'SETTINGS_SECURITY': '安全憑證',
  'SETTINGS_SIGN_OUT': '登出',
  'SETTINGS_SIGN_OUT_CONFIRM_TITLE': '你確定要停止所有上傳並登出嗎？',
  'SETTINGS_SIGN_OUT_CONFIRM_MESSAGE': '你有正在進行的操作或上傳檔案，若離開會將它們全部取消。確定要離開嗎？',
  'SETTINGS_LEAVE': '離開',
  'SETTINGS_STAY': '留下',
  // BUCKET
  'BUCKET_EMPTY_MESSAGE': '看來你目前沒有任何的 Bucket',
  'BUCKET_CREATE_MESSAGE': '別擔心，建立一個是很容易的。',
  'BUCKET_ERROR_MESSAGE': '糟糕，你的連線中斷了⋯⋯',
  'BUCKET_REFRESH_MESSAGE': '別擔心，你可以再試著重新整理。',
  'BUCKET_DUPLICATE_MESSAGE': '此 bucket 已存在！請選擇一個不同的名稱並再試一次。',
  'BUCKET_CREATE': '建立 BUCKET',
  'BUCKET_CREATE_2': '建立 Bucket',
  'BUCKET_DELETE': '刪除 Bucket',
  'BUCKET_NAME': 'Bucket 名稱',
  'BUCKET_CREATE_DESCRIPTION': '你所使用的名稱不得重複於 S3 Portal 中已存在的 bucket 名稱。',
  'BUCKET_DELETE_DESCRIPTION': 'S3 Portal 的 bucket 是唯一的。如果你刪除此 bucket，其他 S3 的使用者可能會使用此名稱。',
  'BUCKET_DELETE_TYPE_NAME': '請輸入 bucket 名稱以確認刪除。',
  'BUCKET_DELETE_ERROR_MESSAGE': '請輸入欲刪除的完整 bucket 名稱。',
  'BUCKET_DELETE_CONFIRM': /^刪除此 bucket 及此 bucket 內的所有檔案與資料夾 （若有支援舊版本則包含舊版本）會無法復原。 你確認要刪除.*嗎？$/,
  // ACTION_NAVBAR
  'ACTION_NAVBAR_ACTIONS': '操作',
  'ACTION_NAVBAR_PROPERTIES': '屬性',
  'ACTION_NAVBAR_TRANSFERS': '傳輸',
  'ACTION_NAVBAR_NONE': '無',
  // TOAST
  'TOAST_SIGN_IN_SUCCESS': '登入成功！',
  'TOAST_SIGN_UP_SUCCESS': '註冊成功！',
  'TOAST_SIGN_OUT_SUCCESS': '登出成功！',
  'TOAST_SIGN_OUT_FAILURE': '登出失敗！',
  'TOAST_CREATE_BUCKET_SUCCESS': /^Bucket.*已建立成功！$/,
  'TOAST_CREATE_BUCKET_FAILURE': /^Bucket.*建立失敗，請再試一次！$/,
  'TOAST_DELETE_BUCKET_SUCCESS': /^Bucket.*刪除成功！$/,
  'TOAST_RESET_PASSWORD_SUCCESS': /^.*更改密碼成功!$/,
  'TOAST_RESET_PASSWORD_FAILURE': /^.*更改密碼失敗，請再試一次$/,
  'TOAST_DELETE_ACCOUNT_SUCCESS': /^.* 删除成功!$/,
  'TOAST_DELETE_ACCOUNT_FAIL': /^.* 删除失败，请再试一次!$/,
  'TOAST_CREATE_FOLDER_SUCCESS': /^資料夾.*建立成功！$/,
  'TOAST_CREATE_FOLDER_FAIL': /^資料夾.*建立失敗，請再試一次！$/,
  // AUTH
  'AUTH_EMAIL': '電子郵件',
  'AUTH_PASSWORD': '密碼',
  'AUTH_RETYPE_PASSWORD': '再次輸入密碼',
  'AUTH_SIGN_IN': '登入',
  'AUTH_SIGN_UP': '註冊',
  'AUTH_HAVE_ACCOUNT': '已經有帳號了嗎？',
  'AUTH_HAVE_NOT_ACCOUNT': '尚未註冊帳號嗎？',
  'AUTH_CREATE_ACCOUNT': '建立帳號',
  'AUTH_LOGIN_TO_YOUR_ACCOUNT': '登入你的帳號',
  'AUTH_ALREADY_EXIST': '已有其他人使用這個電子郵件，請換一個試試',
  'AUTH_SIGN_IN_INCORRECT': '你的電子郵件或密碼不正確，請再試一次。',
  'ADMIN_CREATE_ACCOUNT': '新增使用者',
  // TRANSFER
  'TRANSFER_AUTO_CLEAR': '自動清除已完成傳輸',
  'TRANSFER_TITLE_UPLOAD': /^上傳.*至.*$/,
  'TRANSFER_TITLE_DELETE': /^從.*刪除.*$/,
  'TRANSFER_STATUS_DELETING': '刪除中',
  'TRANSFER_STATUS_DELETED': '已刪除',
  'TRANSFER_STATUS_UPLOADING': '上傳中',
  'TRANSFER_STATUS_COMPLETED': '已完成',
  'TRANSFER_STATUS_RESUMING': '重新開始',
  'TRANSFER_CANCEL_UPLOAD': /^.*的上傳已被取消$/,
  'TRANSFER_CANCEL_TITLE': '你確定要取消這項上傳嗎?',
  'TRANSFER_CANCEL_DESCRIPTION': '取消上傳將無法復原，你確定要這樣做嗎?',
  'TRANSFER_CANCELED': '取消傳輸',
  // FILE
  'FILE_CREATE_FOLDER': '建立資料夾',
  'FILE_STORAGE_CLASS': '儲存類型',
  'FILE_SIZE': '容量大小',
  'FILE_LAST_MODIFIED': '最後修改時間',
  'FILE_OWNER': '擁有者',
  'FILE_NAME': '檔案名稱',
  'FILE_DO_ACTIONS': '你可以執行以下操作',
  'FILE_UPLOAD': '上傳檔案',
  'FILE_EMPTY_BUCKET': '這個 bucket 是空的',
  'FILE_EMPTY_FOLDER': '這個資料夾是空的',
  'FILE_UPLOAD_DESCRIPTION': '點擊新增檔案以上傳檔案至 S3 Portal。點擊檔案名稱右側的 ✖ 可以清除以選擇的檔案。',
  'FILE_ADD': '新增檔案',
  'FILE_NUMBER_OF': '檔案總數：',
  'FILE_TOTAL_SIZE': '總上傳容量大小：',
  'FILE_FOLDER_NAME': '資料夾名稱',
  'FILE_FOLDER_DUPLICATED_MESSAGE': '此資料夾已存在！請選擇一個不同的名稱並再試一次。',
  'FILE_NEW_FOLDER': '新資料夾',
  'FILE_UPLOAD_SUCCESS_MESSAGE': /^檔案.*上傳成功!$/,
  'FILE_DELETE_SUCCESS_MESSAGE': /^.*刪除成功！$/,
  // RENAME
  'RENAME_TITLE': '重新命名',
  'RENAME_DESCRIPTION': '您確定要修改這個物件的名稱嗎?',
  'RENAME_ITEM_NAME': '物件名稱',
  'RENAME_NEW_NAME': '新名稱',
  'RENAME_SUCCESS': /^檔案.*重新命名成功$/,
  'RENAME_FAILURE': /^檔案.*重新命名失敗，請再試一次!$/,
  // MANAGER
  'MANAGER_USER_LIST': '使用者列表',
  'MANAGER_CREATE_USER': '新增使用者',
  'MANAGER_USER_DELETE': '刪除使用者',
  'MANAGER_USER_ACCOUNT': '帳號',
  'MANAGER_USER_ROLE': '權限',
  'MANAGER_USER_REGISTER_TIME': '註冊時間',
  'MANAGER_USER_RESET': '重新設定密碼',
  'MANAGER_SEARCH': '搜尋',
  'MANAGER_DELETE_TITLE': '刪除使用者',
  'MANAGER_DELETE_EMAIL': '使用者 Email',
  'MANAGER_DELETE_TYPE_NAME': '請輸入 Email 以確認刪除。',
  'MANAGER_DELETE_ERROR_MESSAGE': '請輸入欲刪除的完整 Email。',
  'MANAGER_DELETE_CONFIRM': /^刪除此 Account 及此 Account 內的所有 Bucket （若有支援舊版本則包含舊版本）會無法復原。 你確認要刪除.*嗎？$/,
  //MOVE
  'UTILS_MOVE': '移動',
  'MOVE_TITLE': '移動',
  'MOVE_DESCRIPTION': '選擇移動的目的地資料夾',
  'MOVE_SELECTED_ITEMS': '所選項目',
  'MOVE_FOIDER': '我的文件夾',
  'TOAST_MOVE_SUCCESSFULLY': /^檔案.*移動檔案成功$/,
  'TOAST_MOVE_FAILURE' : /^檔案.*移動檔案失敗，請再試一次!$/,
  'TOAST_MOVE_FOLDER_SUCCESSFULLY': '檔案移動檔案成功',
  //MAKE_COPY
  'UTILS_REPLICATE': '製作副本',
  'REPLICATE_DESCRIPTION': '您要將所選項目製作副本嗎？',
  'REPLICATE_CANCEL': '取消',
  'REPLICATE_CONFIRM': '確定',
  'TOAST_REPLICATE_SUCCESSFULLY': '製作副本成功!',
  //USER_QUOTA
  'QUOTA_TITLE' : '使用者配額',

  // // AUTH
  // 'AUTH_LOGIN_TO_YOUR_ACCOUNT': '登入你的帳號',
  // 'AUTH_MAIL': '電子郵件',
  // 'AUTH_PASSWORD': '密碼',
  // 'AUTH_SIGN_IN': '登入',
  // 'AUTH_SIGN_IN_2': '登入',
  // 'AUTH_HAVE_NOT_ACCOUNT': '尚未註冊帳號嗎？',
  // 'AUTH_CREATE_ACCOUNT': '建立帳號',
  // 'AUTH_RETYPE_PASSWORD': '再次輸入密碼',
  // 'AUTH_SIGN_UP': '註冊',
  // 'AUTH_HAVE_ACCOUNT': '已經有帳號了嗎？',
  // // BUCKET
  // 'BUCKET_CREATE': '建立 BUCKET',
  // 'BUCKET_CREATE_2': '建立 Bucket',
  // 'BUCKET_EMPTY_MESSAGE': '看來你目前沒有任何的 Bucket',
  // 'BUCKET_CREATE_MESSAGE': '別擔心，建立一個是很容易的。',
  // 'BUCKET_CREATE_DESCRIPTION': '你所使用的名稱不得重複於 S3 Portal 中已存在的 bucket 名稱。',
  // 'BUCKET_NAME': 'Bucket 名稱',
  // 'BUCKET_DELETE': '刪除 Bucket',
  // 'BUCKET_DUPLICATE_MESSAGE': '此 bucket 已存在！請選擇一個不同的名稱並再試一次。',
  // 'BUCKET_DELETE_DESCRIPTION': 'S3 Portal 的 bucket 是唯一的。如果你刪除此 bucket，其他 S3 的使用者可能會使用此名稱。',
  // 'BUCKET_DELETE_CONFIRM': /^刪除此 bucket 及此 bucket 內的所有檔案與資料夾 （若有支援舊版本則包含舊版本）會無法復原。 你確認要刪除.*嗎？$/,
  // // ACTION_NAVBAR
  // 'ACTION_NAVBAR_ACTIONS': '操作',
  // 'ACTION_NAVBAR_NONE': '無',
  // 'ACTION_NAVBAR_PROPERTIES': '屬性',
  // 'ACTION_NAVBAR_TRANSFERS': '傳輸',
  // // UTILS
  // 'UTILS_NAME': '名稱',
  // 'UTILS_CANCEL': '取消',
  // 'UTILS_CREATE': '建立',
  // 'UTILS_REFRESH': '重新整理',
  // // SETTINGS
  // 'SETTINGS_ACCOUNT': '我的帳戶',
  // 'SETTINGS_BILLING': '付款與費用管理',
  // 'SETTINGS_SECURITY': '安全憑證',
  // 'SETTINGS_SIGN_OUT': '登出',
  // // TOAST
  // 'TOAST_CREATE_BUCKET_SUCCESS': ' 已建立成功！',
  // 'TOAST_CREATE_BUCKET_FAILURE': ' 建立失敗，請再試一次！',
}

module.exports = Translate;
