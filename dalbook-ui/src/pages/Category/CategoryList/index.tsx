import ContentLayout from "@components/templates/Layout/ContentLayout";
import Title from "@components/organisms/Title/Title";
import {WrapLayout} from "@components/templates/Layout/Layout.styles";
import CreateButton from "@components/molecules/Button/CreateButton";

const CategoryList = () => {

    return (
        <WrapLayout>
            <Title title={"항목 관리"}>
                <CreateButton title={"항목 등록"}/>
            </Title>
            <ContentLayout>
                <div>
                    category
                </div>
            </ContentLayout>
        </WrapLayout>

    );
};

export default CategoryList;