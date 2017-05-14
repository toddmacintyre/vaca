import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#EA750A',
    primary2Color: '#FF0055',
    // primary3Color: grey400,
    accent1Color: '#FF0055',
    // accent2Color: grey100,
    // accent3Color: grey500,
    // textColor: darkBlack,
    // secondaryTextColor: fade(darkBlack, 0.54),
    // alternateTextColor: white,
    // canvasColor: white,
    // borderColor: grey300,
    // disabledColor: fade(darkBlack, 0.3),
    // pickerHeaderColor: cyan500,
    // clockCircleColor: fade(darkBlack, 0.07),
    // shadowColor: fullBlack,
  },
});

export const styleFlatButtonContainer = {
  position: 'absolute',
  bottom: '24px',
  width: '100%',
  left: '0',
  textAlign: 'center'
}

export const styleFlatButton = {
  height: '72px',
  borderRadius: '36px'
}