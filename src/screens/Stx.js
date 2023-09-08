import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function Home() {
    return (
    		<View style={styles.home}>
      			{/* RN-Flow:: can be replaced with <Homescreen darkMode={"false"} /> */}
      			<View style={styles.homescreen}>
        				{/* RN-Flow:: can be replaced with <IPhone14Wallpaper device={"iPhone14"} color={"yellow"} /> */}
        				<View style={styles.iPhone14Wallpaper}>
          					<ImageBackground style={styles.wallpaper} source={{uri: /* dummy image */ 'https://dummyimage.com/393x852/000/fff.jpg'}}/>
        				</View>
        				<View style={styles.appsWidgets}/>
        				{/* RN-Flow:: can be replaced with <StatusBar darkMode={"false"} dynamicIsland={"true"} dynIslSize={"default"} /> */}
        				<View style={styles.statusBar}>
          					<View style={styles.leftSide}>
            						{/* RN-Flow:: can be replaced with <_StatusBartime darkMode={"false"} type={"default"} /> */}
            						<View style={styles._StatusBartime}>
              							<Text style={styles.time}>
                								{`9:41`}
              							</Text>
            						</View>
          					</View>
          					<View style={styles.dynamicIsland}>
            						{/* RN-Flow:: can be replaced with <StatusBardynamicIsland type={"default"} /> */}
            						<View style={styles.statusBardynamicIsland}>
              							<View style={styles.trueDepthcamera}/>
              							<View style={styles.faceTimecamera}/>
            						</View>
          					</View>
          					<View style={styles.rightSide}>
            						<View style={styles.signalWifiBattery}>
<Svg style={styles.iconMobileSignal} width="19" height="12" viewBox="0 0 19 12" fill="none">
<Path d="M10.2994 3C10.2994 2.44772 10.7471 2 11.2994 2H12.2994C12.8517 2 13.2994 2.44772 13.2994 3V11C13.2994 11.5523 12.8517 12 12.2994 12H11.2994C10.7471 12 10.2994 11.5523 10.2994 11V3Z" fill="black"/>
<Path d="M15.2994 1C15.2994 0.447715 15.7471 0 16.2994 0L17.2994 0C17.8517 0 18.2994 0.447715 18.2994 1V11C18.2994 11.5523 17.8517 12 17.2994 12H16.2994C15.7471 12 15.2994 11.5523 15.2994 11V1Z" fill="black"/>
<Path d="M5.29941 6.5C5.29941 5.94772 5.74712 5.5 6.29941 5.5H7.29941C7.85169 5.5 8.29941 5.94772 8.29941 6.5V11C8.29941 11.5523 7.85169 12 7.29941 12H6.29941C5.74712 12 5.29941 11.5523 5.29941 11V6.5Z" fill="black"/>
<Path d="M0.299408 9C0.299408 8.44772 0.747123 8 1.29941 8H2.29941C2.85169 8 3.29941 8.44772 3.29941 9V11C3.29941 11.5523 2.85169 12 2.29941 12H1.29941C0.747123 12 0.299408 11.5523 0.299408 11V9Z" fill="black"/>
</Svg>

<Svg style={styles.wifi} width="18" height="12" viewBox="0 0 18 12" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M8.79987 2.58753C11.2664 2.58764 13.6387 3.55505 15.4263 5.28982C15.5609 5.42375 15.7761 5.42206 15.9086 5.28603L17.1954 3.96045C17.2625 3.89146 17.3 3.798 17.2994 3.70076C17.2988 3.60353 17.2604 3.51052 17.1924 3.44234C12.5005 -1.14745 5.09848 -1.14745 0.406571 3.44234C0.338605 3.51047 0.300042 3.60345 0.299416 3.70069C0.298789 3.79792 0.33615 3.89141 0.403232 3.96045L1.69037 5.28603C1.82286 5.42226 2.03819 5.42396 2.17272 5.28982C3.96056 3.55494 6.33308 2.58752 8.79987 2.58753ZM8.83532 6.58937C10.1905 6.58929 11.4974 7.10346 12.5019 8.03199C12.6378 8.16376 12.8518 8.16091 12.9843 8.02555L14.2696 6.69997C14.3373 6.63044 14.3748 6.53611 14.3738 6.4381C14.3729 6.34008 14.3334 6.24656 14.2644 6.17844C11.2053 3.27385 6.46793 3.27385 3.40886 6.17844C3.33976 6.24656 3.30033 6.34013 3.29942 6.43817C3.29852 6.53622 3.3362 6.63054 3.40403 6.69997L4.68894 8.02555C4.82139 8.16091 5.03543 8.16376 5.1713 8.03199C6.17519 7.10408 7.481 6.58995 8.83532 6.58937ZM11.449 9.17672C11.4509 9.27501 11.4131 9.36977 11.3443 9.43863L9.12106 11.7289C9.05589 11.7962 8.96703 11.834 8.87432 11.834C8.7816 11.834 8.69275 11.7962 8.62757 11.7289L6.40393 9.43863C6.33524 9.36972 6.29745 9.27492 6.29949 9.17663C6.30152 9.07834 6.3432 8.98527 6.41469 8.91938C7.83456 7.69354 9.91408 7.69354 11.3339 8.91938C11.4054 8.98532 11.447 9.07843 11.449 9.17672Z" fill="black"/>
</Svg>

              							{/* RN-Flow:: can be replaced with <_StatusBarbattery darkMode={"false"} charge={"myVar"} charging={"false"} percentage={"false"} /> */}
              							<View style={styles._StatusBarbattery}>
<Svg style={styles.outline} width="26" height="13" viewBox="0 0 26 13" fill="none">
<Path opacity="0.35" d="M4.29941 0.5L21.2994 0.5C23.2324 0.5 24.7994 2.067 24.7994 4V9C24.7994 10.933 23.2324 12.5 21.2994 12.5H4.29941C2.36641 12.5 0.799408 10.933 0.799408 9L0.799408 4C0.799408 2.067 2.36641 0.5 4.29941 0.5Z" stroke="black"/>
</Svg>

<Svg style={styles.batteryEnd} width="2" height="5" viewBox="0 0 2 5" fill="none">
<Path opacity="0.4" d="M0.299408 0L0.299408 4.22034C1.14847 3.86291 1.7006 3.0314 1.7006 2.11017C1.7006 1.18894 1.14847 0.357438 0.299408 0" fill="black"/>
</Svg>

<Svg style={styles.fill} width="22" height="9" viewBox="0 0 22 9" fill="none">
<Path d="M0.299408 2C0.299408 0.89543 1.19484 0 2.29941 0L19.2994 0C20.404 0 21.2994 0.895431 21.2994 2V7C21.2994 8.10457 20.404 9 19.2994 9H2.29941C1.19484 9 0.299408 8.10457 0.299408 7L0.299408 2Z" fill="black"/>
</Svg>

              							</View>
            						</View>
          					</View>
        				</View>
        				<View style={styles.search}>
          					<View style={styles.content}>
            						<Text style={styles._search}>
              							{`ZEUS`}
            						</Text>
          					</View>
        				</View>
      			</View>
      			{/* RN-Flow:: can be replaced with <Widgets darkMode={"false"} size={"small"} /> */}
      			<View style={styles.widgets}>
        				<Text style={styles.widget}>
          					{`ZGas`}
        				</Text>
      			</View>
      			{/* RN-Flow:: can be replaced with <_widgets darkMode={"false"} size={"small"} /> */}
      			<View style={styles._widgets}>
        				<Text style={styles._widget}>
          					{`God Chat`}
        				</Text>
      			</View>
      			{/* RN-Flow:: can be replaced with <__widgets darkMode={"false"} size={"small"} /> */}
      			<View style={styles.__widgets}>
        				<Text style={styles.__widget}>
          					{`Meeder`}
        				</Text>
      			</View>
      			{/* RN-Flow:: can be replaced with <___widgets darkMode={"false"} size={"small"} /> */}
      			<View style={styles.___widgets}>
        				<Text style={styles.___widget}>
          					{`ZThreads`}
        				</Text>
      			</View>
      			{/* RN-Flow:: can be replaced with <____widgets darkMode={"false"} size={"small"} /> */}
      			<View style={styles.____widgets}>
        				<Text style={styles.____widget}>
          					{`Dope Game`}
        				</Text>
      			</View>
    		</View>
    )
}

const styles = StyleSheet.create({
  	home: {
    flexShrink: 0,
    height: 852,
    width: 393,
    backgroundColor: "rgba(255, 255, 255, 1)",
    rowGap: 0
},
  	homescreen: {
    position: "absolute",
    flexShrink: 0,
    height: 852,
    width: 393,
    transform: [
        {
            rotateZ: "-0.00deg"
        }
    ],
    backgroundColor: "rgba(255, 255, 255, 1)",
    rowGap: 0
},
  	iPhone14Wallpaper: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    rowGap: 0
},
  	wallpaper: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
},
  	appsWidgets: {
    position: "absolute",
    flexShrink: 0,
    top: 71,
    left: 28,
    right: 26,
    rowGap: 27
},
  	statusBar: {
    position: "absolute",
    flexShrink: 0,
    height: 59,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    columnGap: 0
},
  	leftSide: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    paddingTop: 0,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 8
},
  	_StatusBartime: {
    flexShrink: 0,
    height: 21,
    width: 54,
    rowGap: 0,
    borderRadius: 24
},
  	time: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    width: 54,
    height: 20,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "SF Pro Text",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: -0.3199999928474426,
    lineHeight: 21
},
  	dynamicIsland: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 0
},
  	statusBardynamicIsland: {
    flexShrink: 0,
    height: 37,
    width: 125,
    backgroundColor: "rgba(0, 0, 0, 1)",
    rowGap: 0,
    borderRadius: 100
},
  	trueDepthcamera: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 45,
    backgroundColor: "rgba(0, 0, 0, 1)",
    rowGap: 0,
    borderRadius: 100
},
  	faceTimecamera: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    bottom: 0,
    left: 88,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 1)",
    rowGap: 0,
    borderRadius: 100
},
  	rightSide: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    paddingLeft: 0,
    paddingRight: 11,
    backgroundColor: "rgba(255, 255, 255, 1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 8,
    paddingVertical: 0
},
  	signalWifiBattery: {
    flexShrink: 0,
    flexDirection: "row",
    columnGap: 8
},
  	iconMobileSignal: {
    flexShrink: 0,
    width: 18,
    height: 12,
    overflow: "visible"
},
  	wifi: {
    flexShrink: 0,
    width: 17,
    height: 12,
    overflow: "visible"
},
  	_StatusBarbattery: {
    flexShrink: 0,
    height: 13,
    width: 27,
    rowGap: 0
},
  	outline: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 2,
    bottom: 0,
    left: 0,
    overflow: "visible"
},
  	batteryEnd: {
    position: "absolute",
    flexShrink: 0,
    top: 5,
    right: 0,
    bottom: 4,
    width: 1,
    overflow: "visible"
},
  	fill: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    right: 4,
    bottom: 2,
    left: 2,
    overflow: "visible"
},
  	search: {
    position: "absolute",
    flexShrink: 0,
    bottom: 127,
    height: 28,
    left: 158,
    right: 157,
    backgroundColor: "rgba(245, 245, 245, 0.4)",
    rowGap: 0,
    borderRadius: 14
},
  	content: {
    position: "absolute",
    flexShrink: 0,
    top: 6,
    left: 11,
    width: 56,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4
},
  	_search: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Acme",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 16
},
  	widgets: {
    position: "absolute",
    flexShrink: 0,
    top: 71,
    height: 158,
    left: 209,
    width: 158,
    transform: [
        {
            rotateZ: "-0.00deg"
        }
    ],
    backgroundColor: "rgba(255, 255, 255, 1)",
    rowGap: 0,
    borderRadius: 22
},
  	widget: {
    position: "absolute",
    flexShrink: 0,
    top: 163,
    right: 67,
    left: 66,
    height: 16,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Acme",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 16
},
  	_widgets: {
    position: "absolute",
    flexShrink: 0,
    top: 71,
    height: 158,
    left: 28,
    width: 158,
    transform: [
        {
            rotateZ: "-0.00deg"
        }
    ],
    backgroundColor: "rgba(255, 255, 255, 1)",
    rowGap: 0,
    borderRadius: 22
},
  	_widget: {
    position: "absolute",
    flexShrink: 0,
    top: 163,
    right: 57,
    left: 56,
    height: 16,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Acme",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 16
},
  	__widgets: {
    position: "absolute",
    flexShrink: 0,
    top: 268,
    height: 158,
    left: 28,
    width: 158,
    transform: [
        {
            rotateZ: "-0.00deg"
        }
    ],
    backgroundColor: "rgba(255, 255, 255, 1)",
    rowGap: 0,
    borderRadius: 22
},
  	__widget: {
    position: "absolute",
    flexShrink: 0,
    top: 163,
    right: 62,
    left: 60,
    height: 16,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Acme",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 16
},
  	___widgets: {
    position: "absolute",
    flexShrink: 0,
    top: 268,
    height: 158,
    left: 209,
    width: 158,
    transform: [
        {
            rotateZ: "-0.00deg"
        }
    ],
    backgroundColor: "rgba(255, 255, 255, 1)",
    rowGap: 0,
    borderRadius: 22
},
  	___widget: {
    position: "absolute",
    flexShrink: 0,
    top: 163,
    right: 57,
    left: 56,
    height: 16,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Acme",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 16
},
  	____widgets: {
    position: "absolute",
    flexShrink: 0,
    top: 465,
    height: 158,
    left: 28,
    width: 158,
    transform: [
        {
            rotateZ: "-0.00deg"
        }
    ],
    backgroundColor: "rgba(255, 255, 255, 1)",
    rowGap: 0,
    borderRadius: 22
},
  	____widget: {
    position: "absolute",
    flexShrink: 0,
    top: 163,
    right: 52,
    left: 50,
    height: 16,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Acme",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 16
}
})