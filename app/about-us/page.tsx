import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Facebook, Instagram, Linkedin } from "lucide-react";

const page = () => {
  return (
    <div className=" max-w-7xl m-auto py-20 h-full">
      <div className=" mt-16 max-md:mt-10">
        <h1 className="text-center text-5xl">About Us</h1>
        <div className=" max-w-2xl m-auto p-5">
          <p className="text-xl text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            nesciunt exercitationem ipsa cum quaerat ipsam, vitae eos! Minima ut
            molestias perferendis quod maiores inventore ipsa! Amet nisi error
            at sunt?
          </p>
        </div>

        <h1 className="text-center text-5xl mt-10">Our Team</h1>

        <div className="grid grid-cols-3 max-md:grid-cols-2 px-5 max-sm:grid-cols-1  gap-4 mt-8">
          <Card className="space-y-3 flex flex-col items-center py-10 ">
            <Avatar className=" h-40 w-40 ">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <CardHeader className="flex items-center">
              <CardTitle className="text-3xl">Aagat Sharma</CardTitle>
              <CardDescription className="text-xl">
                Web Developer
              </CardDescription>
              <CardDescription className="text-xl">
                App Developer
              </CardDescription>
            </CardHeader>
            <CardFooter className=" gap-6">
              <Facebook />
              <Instagram />
              <Linkedin />
            </CardFooter>
          </Card>

          <Card className="space-y-3 flex flex-col items-center py-10 ">
            <Avatar className=" h-40 w-40 ">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <CardHeader className="flex items-center">
              <CardTitle className="text-3xl">Aagat Sharma</CardTitle>
              <CardDescription className="text-xl">
                Web Developer
              </CardDescription>
              <CardDescription className="text-xl">
                App Developer
              </CardDescription>
            </CardHeader>
            <CardFooter className=" gap-6">
              <Facebook />
              <Instagram />
              <Linkedin />
            </CardFooter>
          </Card>

          <Card className="space-y-3 flex flex-col items-center py-10 ">
            <Avatar className=" h-40 w-40 ">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <CardHeader className="flex items-center">
              <CardTitle className="text-3xl">Aagat Sharma</CardTitle>
              <CardDescription className="text-xl">
                Web Developer
              </CardDescription>
              <CardDescription className="text-xl">
                App Developer
              </CardDescription>
            </CardHeader>
            <CardFooter className=" gap-6">
              <Facebook />
              <Instagram />
              <Linkedin />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default page;
