import { BaseImage, type BaseImageProps } from "./BaseImage/BaseImage";
import { Description, type DescriptionProps } from "./Description/Description";
import {
    NodeArticle,
    type NodeArticleProps,
} from "./Drupal/NodeArticle/NodeArticle";
import { NodePage, type NodePageProps } from "./Drupal/NodePage/NodePage";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { MetaInfo, type MetaInfoProps } from "./MetaInfo/MetaInfo";
import { Tags, type TagsProps } from "./Tags/Tags";
import { Title, type TitleProps } from "./Title/Title";
import { WebForm, type WebFormProps } from "./WebForm/WebForm";
import {
    WebFormWrapper,
    type WebFormWrapperProps,
} from "./WebForm/WebFormWrapper";

export {
    BaseImage,
    Description,
    Footer,
    Header,
    MetaInfo,
    NodeArticle,
    NodePage,
    Tags,
    Title,
    WebForm,
    WebFormWrapper,
};

export type {
    BaseImageProps,
    DescriptionProps,
    MetaInfoProps,
    NodeArticleProps,
    NodePageProps,
    TagsProps,
    TitleProps,
    WebFormProps,
    WebFormWrapperProps,
};

export { default as SchemaOrg } from "./SchemaOrg/SchemaOrg";
