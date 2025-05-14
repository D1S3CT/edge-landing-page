import FooterTopLineComponent from "./FooterTopLineComponent.tsx";
import FooterBottomLineComponent from "./FooterBottomLineComponent.tsx";


const FooterBottomComponent: React.FC = () => {
    return (
        <div className="flex flex-col py-[60px] px-[8%]">
            <FooterTopLineComponent/>
            <FooterBottomLineComponent/>
        </div>
    )
}

export default FooterBottomComponent
