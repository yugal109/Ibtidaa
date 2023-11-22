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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const page = () => {
  return (
    <div className=" max-w-3xl m-auto min-h-screen px-5 flex items-center justify-center pt-20">
      <Card className=" w-full">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription className="text-lg">
            We will contact you once we recieve your mail
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Enter your Phone Number" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="services">Services</Label>
                <Select>
                  <SelectTrigger id="services">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="website">Website</SelectItem>
                    <SelectItem value="app">IOS/Android App</SelectItem>
                    <SelectItem value="digital-marketing">
                      Digital Marketing
                    </SelectItem>
                    <SelectItem value="ui-ux">UI/UX</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Type your message here." />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
