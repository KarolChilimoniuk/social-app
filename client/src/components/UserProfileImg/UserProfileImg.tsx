import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

// Import required actions.
import { thumbnail, scale } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";

// Import required qualifiers.
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

import { UploadedUserImgProps } from "../../types/types";
import { UploadedUserImgContainer } from "./UserProfileImg.style";

const UserProfileImg = ({
  imgId,
  width,
  height,
  radius,
}: UploadedUserImgProps): JSX.Element => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: `${process.env.REACT_APP_CLOUDINARY_NAME}`,
    },
  });

  const myImage = cld.image(imgId);
  myImage
    .resize(
      thumbnail().width(width).height(height).gravity(focusOn(FocusOn.face()))
    )
    .roundCorners(byRadius(radius));

  return (
    <UploadedUserImgContainer>
      <AdvancedImage cldImg={myImage} />
    </UploadedUserImgContainer>
  );
};

export default UserProfileImg;
