import React, { useState } from "react";
import { mailService } from "../../_services/mail.service";
import { Editor } from "@tinymce/tinymce-react";
import { MyEditor } from "./MyEditor";

import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import { Navigation } from "../../_components";
import { MailComposePageImpl } from "./";

export function MailComposePage() {
  return (
    <div>
      <Navigation>
        <MailComposePageImpl />
      </Navigation>
    </div>
  );
}
