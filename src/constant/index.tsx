export const TOKEN_LIVE_TIME_IN_DAYS = 6;
export const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export const GLOBAL_DATE_FORMAT = 'D MMM';
export const timezoneBE = 'Europe/Stockholm';
export const LOCAL_STORE_TOKEN = 'LOCAL_STORE_TOKEN';
export const LOCAL_STORE_LANGUAGE = 'LOCAL_STORE_LANGUAGE';
export const LOCAL_STORE_EMAIL = 'LOCAL_STORE_EMAIL';
export const LOCAL_STORE_RESOURCE_LOGIN_INFO =
  'LOCAL_STORE_RESOURCE_LOGIN_INFO';
export const LOCAL_RESOURCE_PROFILE = 'LOCAL_RESOURCE_PROFILE';
export const PIXEL_PER_HOUR = 128;

export const assignmentsListViews = {
  WEEK: {
    name: 'week',
    duration: { front: 2, back: 2 },
    unit: 'week'
  },
  MONTH: {
    name: 'month',
    duration: { front: 1, back: 1 },
    unit: 'month'
  },
  DAY: {
    name: 'day',
    duration: { front: 3, back: 3 },
    unit: 'day'
  },
  LIST: {
    name: 'list',
    duration: { front: 1, back: 0 },
    unit: 'month'
  }
};

export const modalTypes = {
  APPROVE: 'approve',
  REJECT: 'reject'
};

export const daysOfWeek = {
  en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  se: ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag']
};

export const errorCodeMap = {
  1001: 'invalidApiKey',
  1002: 'invalidResourceNumber',
  1003: 'invalidToken',
  1004: 'invalidCustomerNumber',
  2004: 'loginLinkExpired',
  2006: 'InvalidEmailFormat',
  3014: 'InvalidResourceType',
  4001: 'CRMUnresponsive',
  9999: 'unhandledCriticalError'
};

export const status = {
  reported: {
    name: 'Rapporterad',
    color: '#B76ED1'
  },
  accept: {
    name: 'Accepterad',
    color: '#6478E6'
  },

  performed: {
    name: 'Utförd',
    color: '#18AD79'
  },

  inquiry: {
    name: 'Förfrågan',
    color: '#ffa500'
  },
  cancelled: {
    name: 'Avbokad',
    color: '#74737B'
  },
  all: {
    name: 'all-assignments',
    color: '#FA0960'
  },

  //@ts-ignore
  getByStatusString: strStatus => {
    if (strStatus === 'reported') return status.reported;
    if (strStatus === 'accept') return status.accept;
    if (strStatus === 'performed') return status.performed;
    if (strStatus === 'cancelled') return status.cancelled;
    if (strStatus === 'inquiry') return status.inquiry;
    if (strStatus === 'all-assignments') return status.all;
    return status.accept;
  },
  //@ts-ignore
  mapToOriginalStatus: statusName => {
    if (statusName === 'Rapporterad') return 'reported';
    if (statusName === 'Accepterad') return 'accept';
    if (statusName === 'Utförd') return 'performed';
    if (statusName === 'Avbokad') return 'cancelled';
    if (statusName === 'Förfrågan') return 'inquiry';
    return 'accept';
  }
};

export const timeSheetContentTypes = {
  TIME_SHEET: 'time_sheet',
  PARKING_EXPENSES: 'parking_expenses',
  OTHER_EXPENSES: 'other_expenses',
  RATING: 'rating',
  TIME_PICKER_START: 'start',
  TIME_PICKER_END: 'end',
  USE_OWN_VEHICLE: 'own_vehicle',
  TOTAL_TRAVEL_DISTANCE: 'total_distance',
  REST_TIME: 'rest_time',
  RESET_TRAVEL: 'reset_travel',
  RESET_PARKING: 'reset_parking',
  RESET_OTHER_EXPENSE: 'reset_other_expense'
};
