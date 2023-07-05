package com.reactmodule;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.Toast;

import androidx.annotation.NonNull;

public class Signup extends Activity {
    public static String email=null;
    public static String password=null;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activitymain1); //where is xml file

        EditText Email=(EditText) findViewById(R.id.text2);
        EditText Password=(EditText) findViewById(R.id.textView7);
        EditText Username=(EditText) findViewById(R.id.textView6);
        Button but=(Button) findViewById(R.id.button5);

        Intent obj = new Intent(getApplicationContext(),Login.class);

        but.setOnClickListener(view -> {
            //code
            String email=Email.getText().toString();
            Signup.email = email;
            System.out.println(email);
            String pass=Password.getText().toString();
            Signup.password = pass;
            if(email.equals("") || pass.equals("")) Toast.makeText(getApplicationContext(),"Invalid",Toast.LENGTH_LONG).show();
            else startActivity(obj);
        });
    }
}
