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

import { LogInIcon, LogOutIcon, UserPlus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

const Register = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-primary bg-transparent dark:bg-gradient-black dark:bg-transparent ">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="flex text-primary-blue dark:text-extra-light">
            Sign Up <UserPlus />
          </CardTitle>

          {/* <CardDescription>Sign up to get started</CardDescription> */}
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1">
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="flex flex-col space-y-1">
                <Input id="email" placeholder="Enter your email" />
              </div>

              <div className="flex flex-col space-y-1">
                <Input
                  id="organisation"
                  placeholder="Enter organisation name"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <Input id="role" placeholder="Enter your role" />
              </div>
              <div className="flex flex-col space-y-1">
                <Input id="password" placeholder="Password" />
              </div>
              <div className="flex flex-col space-y-1">
                <Input id="cnf-password" placeholder="Confirm Password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button disabled variant="primary">
            Sign Up
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
