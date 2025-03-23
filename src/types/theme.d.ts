export interface Theme {
  appBackground: string
  appColor: string
  appDefaultStoke: string
  appLogo: string
  appSkeletonFrom: string
  appSketelonTo: string
  buttons: {
    alert: string
    alertColor: string
    alertHover: string
    disablabled: string
    disabledColor: string
    primary: string
    primaryColor: string
    primaryHover: string
  }
  card: {
    alert: string
    background: string
    border: string
    success: string
    warning: string
  }
  textInput: {
    active: string
    activeColor: string
    borderColor: string
    disabled: string
    disabledBorderColor: string
    disabledColor: string
    placeholderColor: string
  }
  typographies: {
    error: string
    subtitle: string
    success: string
  }
}
