package com.reactmodule;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.Toast;

import androidx.annotation.NonNull;

public class Login extends Activity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activitymain); //where is xml file

        EditText Email=(EditText) findViewById(R.id.textView6);
        EditText Password=(EditText) findViewById(R.id.textView7);
        RadioButton Radiobtn=(RadioButton) findViewById(R.id.radioButton);
        Button but=(Button) findViewById(R.id.buttonPanel);
        Button but1=(Button) findViewById(R.id.button5);

        but.setOnClickListener(view -> {
            //code
            String email=Email.getText().toString();
            System.out.println(email);
            String pass=Password.getText().toString();
            if(email.equals(Signup.email)&&pass.equals(Signup.password))
            {
                Toast.makeText(getApplicationContext(),"Login Successful!",Toast.LENGTH_LONG).show();
            }
            else {
                Toast.makeText(getApplicationContext(),"Unsuccessful!",Toast.LENGTH_LONG).show();
            }
        });

        but1.setOnClickListener(view -> {
            Intent obj = new Intent(getApplicationContext(), Signup.class);
            startActivity(obj);
        });
    }
}
