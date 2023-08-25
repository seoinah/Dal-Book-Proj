import {ContentHeader, TitleBtnArea, TitleH1, TitleH1Area, TitleRow} from "@components/organisms/Title/Title.styles";

const Title = ({title, children}) => {
    return (
        <ContentHeader>
            <TitleRow>
                <TitleH1Area span={8}>
                    <TitleH1>{title}</TitleH1>
                </TitleH1Area>
                <TitleBtnArea span={8} offset={8}>
                    {children}
                </TitleBtnArea>
            </TitleRow>
        </ContentHeader>
    );
};

export default Title;
