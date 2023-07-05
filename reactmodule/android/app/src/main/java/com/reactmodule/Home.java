package com.reactmodule;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class Home extends Activity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.homemain); //where is xml file

        Button but1=(Button) findViewById(R.id.button5);
        Button but2=(Button) findViewById(R.id.blocking);

        but1.setOnClickListener(view -> {
                    Intent obj = new Intent(getApplicationContext(), Signup.class);
                    startActivity(obj);
                });

    but2.setOnClickListener(View-> {
            Intent obj1 = new Intent(getApplicationContext(), Login.class);
            startActivity(obj1);
        });
    }

}
