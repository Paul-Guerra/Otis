import * as React from 'react';
import Content from './content.component';

export default () => {
  let times = 'once';
  // let text = 'i am *bold _and_ underline_* and **you** are /buzz not at http://www.google.com . . .  or are you?';
  // let text = 'i am *bold _and underline* and _ ?';
  let text = `n*lkk*

Step 1	Log*in to Eikon	User should be lo*gged into Eikon
Step 2	Launch "My Profile & Directory" app	My Profile should be shown
Step 3	Click on "Edit" button on the top right of profile image section	Image Upload dialog should be shown
Step 4	From "Set a profile photo" dialog click on "Choose File" image upload and select an image.	The image should be displayed for cropping
Step 5	Select cropping area in the image and click "Crop" button.	Image should be set as profile image

_plain_`;
  return (
    <div>
      <h2>My mother made me an app {times}. . . {times.toUpperCase()}!</h2>
      <Content text={text} />
    </div>
  );
};
