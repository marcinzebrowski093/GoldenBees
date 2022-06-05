<?php
                            if(isset($_POST['submit']))
                            {
                                $User_name = $_POST['name'];
                                $tel = $_POST['tel'];
                                $user_email = $_POST['email'];
                                $user_message = $_POST['message'];

                                $email_from = 'noreply@goldenbees.com';
                                $email_subject = "New Form Submission";
                                $email_body = "Name: $User_name.\n".
                                             "Tel: $tel.\n".
                                              "Email: $user_email.\n".
                                              "Message: $user_message.\n";

                                $to_email = "mzebrowski@amplifier.pl";
                                $headers = "From: $email_from \r\n";
                                $headers .= "Reply-to: $user_email\r\n";

                                $secretKey = "6LfTyOwbAAAAAKNStfvZX-1Aol2naOReqXssskXq";
                                $responseKey = $_POST['g-recaptcha-response'];
                                $UserIP = $_SERVER['REMOTE_ADDR'];
                                $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$responseKey&remoteip=$UserIP";

                                $response = file_get_contents($url);
                                $response = json_decode($response);

                                if ($response->success)
                                {
                                    header("Location:formsubmitted");
                                    mail($to_email, $email_subject, $email_body, $headers);
                                    echo "Message sent Successfully";
                                }
                                else 
                                {
                                    header("Location:index.html");
                                    echo "<span>Invalid Captcha, please try again</span>";
                                }

                            }
?>