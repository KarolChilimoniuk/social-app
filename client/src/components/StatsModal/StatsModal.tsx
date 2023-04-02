import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import closeImg from "../../images/cross-mark.png";
import {
  fetchStatsModalContent,
  hideStatsModalHandler,
} from "../../actions/appDataAction";
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
  NoContentParagraph,
  UserContainer,
  UserHeaderContainer,
} from "./StatsModal.style";

const StatsModal = (): JSX.Element => {
  const dispatch: Dispatch = useDispatch();

  const modalHideStatus: boolean = useSelector(
    (state: IRootState) => state.appData.statsModalHideStatus
  );
  const modalContent: Array<IAppUsers> | null = useSelector(
    (state: IRootState) => state.appData.statsModalContent
  );
  const modalLoadingStatus: boolean = useSelector(
    (state: IRootState) => state.appData.statsModalLoadingStatus
  );

  return (
    <ModalBackground hidden={modalHideStatus}>
      <ModalContainer>
        <ImgContainer>
          <Img
            src={closeImg}
            onClick={() => {
              dispatch(hideStatsModalHandler(true));
              dispatch(fetchStatsModalContent(null));
            }}
          />
        </ImgContainer>
        {modalLoadingStatus && <LoadingIcon />}
        {!modalLoadingStatus &&
          modalContent !== null &&
          modalContent.length === 0 && (
            <NoContentParagraph>List if empty</NoContentParagraph>
          )}
        {!modalLoadingStatus &&
          modalContent !== null &&
          modalContent.length > 0 && (
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

export default StatsModal;
