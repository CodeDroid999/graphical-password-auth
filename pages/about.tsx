import HowToUseSection from "@/components/HowToUse";

const AboutPage: React.FC = () => {
    return (
        <div className="flex  flex-col justify-center items-center w-full ">
            <div className="bg-blue-200 p-8 px-20 ">
                <div className="relative isolate px-6 pt-10 lg:px-8">
                    <h2 className="text-2xl text-center p-5 font-semibold mb-4 text-black">About the Tool</h2>
                    <p className="text-neutral-500 text-center">
                        The graphical authentication system is a web-based tool designed to provide a secure and user-friendly way for users to authenticate and access their accounts. Instead of traditional text-based passwords, this tool uses graphical elements, such as images or patterns, to authenticate users, making it more difficult for unauthorized individuals to gain access to user accounts.
                    </p>
                    <p className="text-neutral-500 text-center w-full mt-1">
                        With the graphical authentication system, users can create and register their unique graphical passwords, which are then used during login attempts. The system utilizes advanced image recognition algorithms and pattern matching techniques to verify the authenticity of the entered graphical password.
                    </p>
                    <p className="text-neutral-500 mt-1">
                        Our primary goal is to enhance the security of user accounts while providing an intuitive and user-friendly authentication experience. We believe that graphical authentication can be an effective alternative to traditional text-based passwords and contribute to a safer online environment for users.
                    </p>
                </div>
            </div>
            <div>
                <HowToUseSection />
            </div>
        </div>
    );
};

export default AboutPage;
