import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import closeImg from "../../images/cross-mark.png";
import { hideModalHandler } from "../../actions/appDataAction";
import UserHeader from "../UserHeader/UserHeader";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import UserProfileImg from "../UserProfileImg/UserProfileImg";
import NoImgAvatar from "../NoImgAvatar/NoImgAvatar";
import { IAppUsers, IRootState } from "../../interfaces/interfaces";
import {
  ModalBackground,
  ModalContainer,
  ImgContainer,
  Img,
  Content,
  Paragraph,
  UserContainer,
  UserHeaderContainer,
} from "./Modal.style";

const Modal = (): JSX.Element => {
  const dispatch: Dispatch = useDispatch();

  const modalHideStatus: boolean = useSelector(
    (state: IRootState) => state.appData.modalHideStatus
  );
  const modalContent: Array<IAppUsers> = useSelector(
    (state: IRootState) => state.appData.modalContent
  );
  const modalLoadingStatus: boolean = useSelector(
    (state: IRootState) => state.appData.modalLoadingStatus
  );

  return (
    <ModalBackground hidden={modalHideStatus}>
      <ModalContainer>
        <ImgContainer>
          <Img
            src={closeImg}
            onClick={() => {
              dispatch(hideModalHandler(true));
            }}
          />
        </ImgContainer>
        {modalLoadingStatus && <LoadingIcon />}
        {!modalLoadingStatus && modalContent.length === 0 ? (
          <Paragraph>None :/</Paragraph>
        ) : (
          <Content>
            {modalContent!.map((user: IAppUsers) => (
              <UserContainer key={user._id}>
                {user.pic !== "" ? (
                  <UserProfileImg
                    imgId={user.pic}
                    width={80}
                    height={80}
                    radius={50}
                  />
                ) : (
                  <NoImgAvatar height={80} width={80} />
                )}
                <UserHeaderContainer>
                  <UserHeader
                    userId={user._id}
                    name={user.firstName}
                    lastName={user.lastName}
                  />
                </UserHeaderContainer>
              </UserContainer>
            ))}
          </Content>
        )}
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
