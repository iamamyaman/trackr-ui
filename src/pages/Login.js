import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useDarkSide from "hooks/useDarkSide";
import { LogInIcon } from "lucide-react";

const Login = () => {
  return (
    <div className="w-screen h-screen relative flex flex-col justify-center items-center bg-gradient-primary bg-transparent dark:bg-gradient-black dark:bg-transparent ">
      {/* <img className={`-mb-5 dark:mix-blend-luminosity `} src="/logo.svg"></img> */}
      <Card className="w-[90%] max-w-[350px] relative ">
        <CardHeader>
          <CardTitle className="flex text-primary-blue dark:text-extra-light">
            Sign In <LogInIcon />
          </CardTitle>

          {/* <CardDescription>
            Deploy your new project in one-click.
          </CardDescription> */}
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input id="password" type="password" placeholder="Password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button disabled variant="primary">
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
