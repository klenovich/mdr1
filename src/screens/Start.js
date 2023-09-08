import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function Start() {
    return (
    		<View style={styles.whatsNew}>
      			{/* RN-Flow:: can be replaced with <TopNavigation darkMode={"true"} device={"iPhone14Pro"} type={"default"} modalStack={"true"} /> */}
      			<View style={styles.topNavigation}>
        				<View style={styles.backgroundSheets}>
          					<View style={styles.shapeBackground}/>
<Svg style={styles.background} width="393" height="78" viewBox="0 0 393 78" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M393 0H0V78C0 74.2774 0 72.4162 0.489435 70.9098C1.47861 67.8654 3.86545 65.4786 6.90983 64.4894C8.41616 64 10.2774 64 14 64H16.1231C16.1231 58.4772 20.6002 54 26.1231 54H366.877C372.4 54 376.877 58.4772 376.877 64H379C382.723 64 384.584 64 386.09 64.4894C389.135 65.4786 391.521 67.8654 392.511 70.9098C393 72.4162 393 74.2774 393 78V0Z" fill="black"/>
</Svg>

          					{/* RN-Flow:: can be replaced with <StatusBar darkMode={"true"} dynamicIsland={"true"} dynIslSize={"default"} /> */}
          					<View style={styles.statusBar}>
            						<View style={styles.leftSide}>
              							{/* RN-Flow:: can be replaced with <_StatusBartime darkMode={"true"} type={"default"} /> */}
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
<Path d="M10.2994 3C10.2994 2.44772 10.7471 2 11.2994 2H12.2994C12.8517 2 13.2994 2.44772 13.2994 3V11C13.2994 11.5523 12.8517 12 12.2994 12H11.2994C10.7471 12 10.2994 11.5523 10.2994 11V3Z" fill="white"/>
<Path d="M15.2994 1C15.2994 0.447715 15.7471 0 16.2994 0H17.2994C17.8517 0 18.2994 0.447715 18.2994 1V11C18.2994 11.5523 17.8517 12 17.2994 12H16.2994C15.7471 12 15.2994 11.5523 15.2994 11V1Z" fill="white"/>
<Path d="M5.29938 6.5C5.29938 5.94772 5.74709 5.5 6.29938 5.5H7.29938C7.85166 5.5 8.29938 5.94772 8.29938 6.5V11C8.29938 11.5523 7.85166 12 7.29938 12H6.29938C5.74709 12 5.29938 11.5523 5.29938 11V6.5Z" fill="white"/>
<Path d="M0.299377 9C0.299377 8.44772 0.747093 8 1.29938 8H2.29938C2.85166 8 3.29938 8.44772 3.29938 9V11C3.29938 11.5523 2.85166 12 2.29938 12H1.29938C0.747093 12 0.299377 11.5523 0.299377 11V9Z" fill="white"/>
</Svg>

<Svg style={styles.wifi} width="18" height="12" viewBox="0 0 18 12" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M8.79984 2.58753C11.2664 2.58764 13.6386 3.55505 15.4263 5.28982C15.5609 5.42375 15.776 5.42206 15.9086 5.28603L17.1954 3.96045C17.2625 3.89146 17.2999 3.798 17.2994 3.70076C17.2988 3.60353 17.2603 3.51052 17.1924 3.44234C12.5005 -1.14745 5.09845 -1.14745 0.40654 3.44234C0.338575 3.51047 0.300012 3.60345 0.299385 3.70069C0.298758 3.79792 0.33612 3.89141 0.403201 3.96045L1.69034 5.28603C1.82283 5.42226 2.03816 5.42396 2.17269 5.28982C3.96053 3.55494 6.33304 2.58752 8.79984 2.58753ZM8.83529 6.58937C10.1905 6.58929 11.4974 7.10346 12.5019 8.03199C12.6378 8.16376 12.8518 8.16091 12.9843 8.02555L14.2695 6.69997C14.3372 6.63044 14.3748 6.53611 14.3738 6.4381C14.3728 6.34008 14.3334 6.24656 14.2644 6.17844C11.2053 3.27385 6.4679 3.27385 3.40882 6.17844C3.33973 6.24656 3.3003 6.34013 3.29939 6.43817C3.29849 6.53622 3.33617 6.63054 3.404 6.69997L4.68891 8.02555C4.82136 8.16091 5.0354 8.16376 5.17127 8.03199C6.17516 7.10408 7.48097 6.58995 8.83529 6.58937ZM11.4489 9.17672C11.4509 9.27501 11.413 9.36977 11.3443 9.43863L9.12103 11.7289C9.05585 11.7962 8.967 11.834 8.87429 11.834C8.78157 11.834 8.69272 11.7962 8.62754 11.7289L6.4039 9.43863C6.33521 9.36972 6.29742 9.27492 6.29946 9.17663C6.30149 9.07834 6.34317 8.98527 6.41466 8.91938C7.83453 7.69354 9.91405 7.69354 11.3339 8.91938C11.4053 8.98532 11.447 9.07843 11.4489 9.17672Z" fill="white"/>
</Svg>

                								{/* RN-Flow:: can be replaced with <_StatusBarbattery darkMode={"true"} charge={"myVar"} charging={"false"} percentage={"false"} /> */}
                								<View style={styles._StatusBarbattery}>
<Svg style={styles.outline} width="26" height="13" viewBox="0 0 26 13" fill="none">
<Path opacity="0.35" d="M4.29938 0.527543H21.2994C23.2172 0.527543 24.7718 2.08222 24.7718 4V9C24.7718 10.9178 23.2172 12.4725 21.2994 12.4725H4.29938C2.38159 12.4725 0.826921 10.9178 0.826921 9V4C0.826921 2.08221 2.38159 0.527543 4.29938 0.527543Z" stroke="white" strokeWidth="1.05509"/>
</Svg>

<Svg style={styles.batteryEnd} width="2" height="5" viewBox="0 0 2 5" fill="none">
<Path opacity="0.4" d="M0.299377 0V4.22034C1.14844 3.86291 1.70057 3.0314 1.70057 2.11017C1.70057 1.18894 1.14844 0.357438 0.299377 0" fill="white"/>
</Svg>

<Svg style={styles.fill} width="22" height="9" viewBox="0 0 22 9" fill="none">
<Path d="M0.299377 2C0.299377 0.89543 1.19481 0 2.29938 0H19.2994C20.4039 0 21.2994 0.895431 21.2994 2V7C21.2994 8.10457 20.4039 9 19.2994 9H2.29938C1.19481 9 0.299377 8.10457 0.299377 7V2Z" fill="white"/>
</Svg>

                								</View>
              							</View>
            						</View>
          					</View>
        				</View>
      			</View>
      			{/* RN-Flow:: can be replaced with <HomeIndicator darkMode={"true"} /> */}
      			<View style={styles.homeIndicator}>
        				<View style={styles._homeIndicator}/>
      			</View>
      			{/* RN-Flow:: can be replaced with <Button darkMode={"true"} type={"filled"} /> */}
      			<View style={styles.button}>
        				<Text style={styles.label}>
          					{`Log In`}
        				</Text>
      			</View>
      			<View style={styles.container}>
        				<View style={styles.titleIcon}>
          					<View style={styles.icon}>
<Svg style={styles.sFSymbolAppbadge} width="48" height="47" viewBox="0 0 48 47" fill="none">
<Path d="M39.1006 15.9268C43.438 15.9268 47.041 12.3237 47.041 7.96338C47.041 3.60303 43.438 0 39.1006 0C34.7173 0 31.1372 3.60303 31.1372 7.96338C31.1372 12.3237 34.7173 15.9268 39.1006 15.9268ZM0.5 34.1255C0.5 38.0498 0.844238 41.3086 3.18506 43.6494C5.52588 45.9902 8.83057 46.3574 12.7319 46.3574H30.5635C34.4878 46.3574 37.7925 45.9902 40.1333 43.6494C42.4741 41.3086 42.8184 38.0498 42.8184 34.1255V18.4971C41.8086 18.8413 40.707 19.0249 39.5596 18.979C39.3989 19.0249 39.2842 19.0249 39.1235 19.0479V34.7451C39.1235 37.1318 38.8252 39.5645 37.4253 40.9644C36.0483 42.3413 33.5698 42.6626 31.2061 42.6626H12.1123C9.74854 42.6626 7.27002 42.3413 5.87012 40.9644C4.49316 39.5645 4.19482 37.1318 4.19482 34.7451V15.9038C4.19482 13.4941 4.49316 11.0156 5.87012 9.63867C7.27002 8.23877 9.77148 7.94043 12.1812 7.94043H28.0161C28.0161 7.77979 28.0391 7.64209 28.062 7.50439C28.0161 6.35693 28.1997 5.25537 28.5439 4.24561H12.686C8.83057 4.24561 5.52588 4.61279 3.18506 6.95361C0.844238 9.29443 0.5 12.5762 0.5 16.4087V34.1255Z" fill="#0A84FF"/>
</Svg>

          					</View>
          					<Text style={styles.title}>
            						
          					</Text>
        				</View>
      			</View>
    		</View>
    )
}

const styles = StyleSheet.create({
  	whatsNew: {
    flexShrink: 0,
    height: 852,
    width: 393,
    backgroundColor: "rgba(255, 255, 255, 1)",
    rowGap: 0
},
  	topNavigation: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0.5,
    borderLeftWidth: 0,
    backgroundColor: "rgba(28, 28, 30, 1)",
    rowGap: 2,
    borderColor: "rgba(60, 60, 67, 0.36)"
},
  	backgroundSheets: {
    alignSelf: "stretch",
    flexShrink: 0,
    height: 78,
    rowGap: 0
},
  	shapeBackground: {
    position: "absolute",
    flexShrink: 0,
    right: 16,
    bottom: 14,
    left: 16,
    height: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)"
},
  	background: {
    position: "absolute",
    flexShrink: 0,
    width: 393,
    height: 78,
    overflow: "visible"
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
    color: "rgba(255, 255, 255, 1)",
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
  	homeIndicator: {
    position: "absolute",
    flexShrink: 0,
    bottom: 0,
    height: 34,
    left: 0,
    right: 0,
    rowGap: 0
},
  	_homeIndicator: {
    position: "absolute",
    flexShrink: 0,
    right: 129,
    bottom: 8,
    left: 130,
    height: 5,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 100
},
  	button: {
    position: "absolute",
    flexShrink: 0,
    bottom: 97,
    left: 24,
    right: 24,
    backgroundColor: "rgba(10, 132, 255, 1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14
},
  	label: {
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Acme",
    fontSize: 17,
    fontWeight: "400",
    letterSpacing: -0.40799999237060547,
    lineHeight: 22
},
  	container: {
    position: "absolute",
    flexShrink: 0,
    top: 124,
    left: 32,
    right: 32,
    alignItems: "center",
    rowGap: 56
},
  	titleIcon: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 48
},
  	icon: {
    flexShrink: 0,
    height: 48,
    width: 48,
    rowGap: 0
},
  	sFSymbolAppbadge: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    left: 1,
    width: 47,
    height: 46,
    overflow: "visible"
},
  	title: {
    alignSelf: "stretch",
    flexShrink: 0
}
})