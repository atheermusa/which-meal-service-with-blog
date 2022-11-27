import Container from "./container";

const Footer = () => {
    return (
        <footer className="bg-neutral-50 border-t border-neutral-200">
            <Container>
                <div className="py-28 flex flex-col lg:flex-row items-center">
                    <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                        Whichmealservice
                    </h3>
                    <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
                        <a
                            href="https://l4p5yx6nazw.typeform.com/to/M2QcZXtW"
                            className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border md:py-4 md:text-lg md:px-10`}
                        >
                            Click here to compare meal kits
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
