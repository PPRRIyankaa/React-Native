package com.reactmodule; // replace your-apps-package-name with your app’s package name
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

import android.content.Intent;
import android.widget.Toast;
import android.util.Log;

public class Basicmodule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
     Basicmodule(ReactApplicationContext context) {
         super(context);
         reactContext=context;
     }
  
     // add to CalendarModule.java
  @Override
  public String getName() {
     return "Sample";
  }
  
  @ReactMethod

  public void createLoginPage() {
      Intent obj1=new Intent(reactContext,Home.class);
      getCurrentActivity().startActivity(obj1);
}
}