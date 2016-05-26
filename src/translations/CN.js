export default {
  UTILS: {
    LOADING: '载入中...',
    NAME: '名称',
    CANCEL: '取消',
    CREATE: '创建',
    UPLOAD: '上传',
    OPEN: '开启',
    DOWNLOAD: '下载',
    DELETE: '删除',
    REFRESH: '刷新',
    OR: '或',
  },
  VALIDATION: {
    REQUIRED: '此栏位不得为空。',
    EMAIL: '此栏位必须符合电邮格式。',
    MIN_LENGTH: '此栏位不得小于 {{ minlength }} 个字元。',
    MAX_LENGTH: '此栏位不得大于 ​​{{ maxlength }} 个字元。',
    MATCH: '请输入与前一个栏位相同的值。',
  },
  VALIDATION: {
    REQUIRED: '此栏位不得为空。',
    EMAIL: '此栏位必须符合电邮格式。',
    MIN_LENGTH: '此栏位不得小于 {{ minlength }} 个字元。',
    MAX_LENGTH: '此栏位不得大于 ​​{{ maxlength }} 个字元。',
    MATCH: '请输入与前一个栏位相同的值。',
  },
  SETTINGS: {
    ACCOUNT: '我的帐户',
    BILLING: '付款与费用管理',
    SECURITY: '安全凭证',
    SIGN_OUT: '登出',
    SIGN_OUT_CONFIRM_TITLE: '你确定要停止所有上传并登出吗？',
    SIGN_OUT_CONFIRM_MESSAGE: '你有正在进行的操作或上传档案，若离开会将它们全部取消。确定要离开吗？',
    LEAVE: '离开',
    STAY: '留下',
  },
  BUCKET: {
    EMPTY_MESSAGE: '看来你目前没有任何的 Bucket',
    CREATE_MESSAGE: '别担心，建立一个是很容易的',
    ERROR_MESSAGE: '糟糕，您的连线中断了⋯⋯',
    REFRESH_MESSAGE: '别担心，你可以再试着刷新。',
    DUPLICATE_MESSAGE: '此 bucket 已存在！请选择一个不同的名称并再试一次。',
    CREATE: '创建 Bucket',
    DELETE: '删除 Bucket',
    NAME: 'Bucket 名称',
    CREATE_DESCRIPTION: '你所使用的名称不得重复于 S3 Portal 中已存在的 bucket 名称。',
  },
  ACTION_NAVBAR: {
    ACTIONS: '操作',
    PROPERTIES: '属性',
    TRANSFERS: '传输',
    NONE: '无',
  },
  TOAST: {
    SIGN_IN_SUCCESS: '登入成功！',
    SIGN_UP_SUCCESS: '注册成功！',
    SIGN_OUT_SUCCESS: '登出成功！',
    SIGN_OUT_FAILURE: '登出失敗！',
    CREATE_BUCKET_SUCCESS: 'Bucket {{ bucket }} 已创建成功！',
    CREATE_BUCKET_FAILURE: 'Bucket {{ bucket }} 创建失敗，请再试一次！',
  },
  AUTH: {
    EMAIL: '电邮',
    PASSWORD: '密码',
    RETYPE_PASSWORD: '再次输入密码',
    SIGN_IN: '登入',
    SIGN_UP: '注册',
    HAVE_ACCOUNT: '已经有帐户了吗？',
    HAVE_NOT_ACCOUNT: '尚未注册帐戶吗？',
    CREATE_ACCOUNT: '创建帐户',
    LOGIN_TO_YOUR_ACCOUNT: '登入你的帐户',
    ALREADY_EXIST: '已有其他人使用这个电邮，请换一个试试',
    SIGN_IN_INCORRECT: '你的电邮或密码不正确，请再试一次。',
  },
  TRANSFER: {
    AUTO_CLEAR: '自动清除已完成传输',
    TITLE: {
      UPLOAD: '上传 {{ name }} 至 {{ bucket }}',
      DELETE: '從 {{ bucket }} 删除 {{ name }}',
    },
    STATUS: {
      DELETING: '删除中',
      DELETED: '已删除',
      UPLOADING: '上传中',
      COMPLETED: '已完成',
      RESUMING: '重新开始',
    },
  },
  FILE: {
    CREATE_FOLDER: '创建文件夹',
    STORAGE_CLASS: '储存类型',
    SIZE: '容量大小',
    LAST_MODIFIED: '最后修改时间',
    DO_ACTIONS: '你可以执行以下操作',
    UPLOAD: '上传档案',
    EMPTY_BUCKET: '这个 bucket 是空的',
    EMPTY_FOLDER: '这个文件夹是空的',
    UPLOAD_DESCRIPTION: '点击新增档案以上传文件至 S3 Portal。点击文件名称右侧的 ✖ 可以清除以选择的文件。',
    ADD: '新增文件',
    NUMBER_OF: '档案总数：',
    TOTAL_SIZE: '总上传容量大小：',
    FOLDER_NAME: '文件夹名称',
    FOLDER_DUPLICATED_MESSAGE: '此文件夹已存在！请选择一个不同的名称并再试一次。',
    NEW_FOLDER: '新文件夾',
  },
};
