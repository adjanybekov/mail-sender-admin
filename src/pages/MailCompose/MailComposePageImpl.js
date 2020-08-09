import React, { useState, useEffect } from "react";
import { mailService } from "../../_services/mail.service";
import { Editor } from "@tinymce/tinymce-react";
import { TagsInput } from "../../_components";

import { inject, observer, useObserver } from "mobx-react";
import { StoreContext } from "../../index";

export function MailComposePageImpl(props) {
  const store = (window.store = React.useContext(StoreContext));

  const [to, setTo] = useState("");
  const [receivers, setReceivers] = useState([]);
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = () => {
    console.log("submitted", { to, subject, text });
    mailService.createMail({ receivers, subject, text }).then((res) => {
      console.log(res.data);
    });
  };

  const handleEditorChange = (content, editor) => {
    setText(content);
    console.log("Content was updated:", content);
  };

  const selectedTags = (tags) => {
    console.log(tags, "selected tags");
    setReceivers(tags);
  };
  useEffect(() => {
    console.log(store.emails.slice(), "props storage");
  }, []);

  return useObserver(() => (
    <div>
      <div class="content-wrapper">
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Compose</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item active">Compose</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section class="content">
          <div class="container-fluid">
            <div class="row">
              {/* <div class="col-md-3">
                <a href="mailbox.html" class="btn btn-primary btn-block mb-3">
                  Back to Inbox
                </a>

                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Folders</h3>

                    <div class="card-tools">
                      <button
                        type="button"
                        class="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i class="fas fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div class="card-body p-0">
                    <ul class="nav nav-pills flex-column">
                      <li class="nav-item active">
                        <a href="#" class="nav-link">
                          <i class="fas fa-inbox"></i> Inbox
                          <span class="badge bg-primary float-right">12</span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link">
                          <i class="far fa-envelope"></i> Sent
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link">
                          <i class="far fa-file-alt"></i> Drafts
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link">
                          <i class="fas fa-filter"></i> Junk
                          <span class="badge bg-warning float-right">65</span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link">
                          <i class="far fa-trash-alt"></i> Trash
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Labels</h3>

                    <div class="card-tools">
                      <button
                        type="button"
                        class="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i class="fas fa-minus"></i>
                      </button>
                    </div>
                  </div>

                  <div class="card-body p-0">
                    <ul class="nav nav-pills flex-column">
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          <i class="far fa-circle text-danger"></i> Important
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          <i class="far fa-circle text-warning"></i> Promotions
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          <i class="far fa-circle text-primary"></i> Social
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}

              <div class="col-md-12">
                <div class="card card-primary card-outline">
                  <div class="card-header">
                    <h3 class="card-title">Compose New Message</h3>
                  </div>

                  <div class="card-body">
                    <div class="form-group">
                      {/* <input
                        class="form-control"
                        placeholder="To:"
                        value={to}
                        onChange={(e) => {
                          console.log(e.target.value);
                          setTo(e.target.value);
                        }}
                      /> */}

                      <TagsInput
                        selectedTags={selectedTags}
                        tags={
                          store.emails.length > 0
                            ? store.emails.slice()
                            : receivers
                        }
                      />
                    </div>
                    <div class="form-group">
                      <input
                        class="form-control"
                        placeholder="Subject:"
                        value={subject}
                        onChange={(e) => {
                          console.log(e.target.value);
                          setSubject(e.target.value);
                        }}
                      />
                    </div>
                    {/* <div class="form-group" style={{height: '300px'}}>
                     <textarea id = "compose-textarea" class="form-control" placeholder="Text" style={{height: '300px'}} value={text} onChange={(e)=>{console.log(e.target.value);setText(e.target.value)}}/>

                </div> */}

                    <div class="form-group">
                      {/* <SunEditor setOptions={{
				    height: 200,
					buttonList: [['undo', 'redo', 'font', 'fontSize', 'formatBlock'],
                    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'removeFormat'],

                    ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'table'],
                    ['link', 'image', 'video', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save']]
			}}
            onChange={handleEditorChange}/> */}
                      <Editor
                        apiKey="5pqv76cgxilvt1jry7en8v9e6la3amm9ne0wy4f588k25nti"
                        initialValue="<p>Please type your message</p>"
                        init={{
                          height: 500,
                          menubar: true,
                          plugins: [
                            "advlist autolink lists link image charmap print preview hr anchor pagebreak",
                            "searchreplace wordcount visualblocks visualchars code fullscreen",
                            "insertdatetime media nonbreaking save table contextmenu directionality",
                            "emoticons template paste textcolor colorpicker textpattern",
                          ],
                          toolbar:
                            "insertfile undo redo | formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | help | link image",

                          // image_title:true,
                          automatic_uploads: false,
                          // paste_data_images: true,
                          file_picker_types: "file image media",
                          // image_uploadtab: true,
                          // images_upload_url: 'postAcceptor.php',
                          file_picker_callback: function (
                            callback,
                            value,
                            meta
                          ) {
                            // Provide file and text for the link dialog
                            if (meta.filetype == "file") {
                              callback("mypage.html", { text: "My text" });
                            }

                            // Provide image and alt text for the image dialog
                            if (meta.filetype == "image") {
                              var input = document.createElement("input");
                              input.setAttribute("type", "file");
                              input.setAttribute("accept", "image/*");
                              console.log("jkln", value);
                              input.onchange = function () {
                                console.log("chande");
                                var file = this.files[0];
                                var reader = new FileReader();
                                console.log(file);
                                // reader.onload = function () {
                                //     var id = 'blobid' + (new Date()).getTime();
                                //     var blobCache =  this.activeEditor.editorUpload.blobCache;
                                //     var base64 = reader.result.split(',')[1];
                                //     var blobInfo = blobCache.create(id, file, base64);
                                //     blobCache.add(blobInfo);

                                //     // call the callback and populate the Title field with the file name
                                //     //cb(blobInfo.blobUri(), { title: file.name });
                                // };
                                reader.readAsDataURL(file);
                              };
                              callback("myimage.jpg", { alt: "My alt text" });
                            }

                            // Provide alternative source and posted for the media dialog
                            if (meta.filetype == "media") {
                              callback("movie.mp4", {
                                source2: "alt.ogg",
                                poster: "image.jpg",
                              });
                            }
                          },
                          // file_picker_callback: function(callback, value, meta) {
                          //     var input = document.createElement('input');
                          //     input.setAttribute('type', 'file');
                          //     input.setAttribute('accept', 'image/*');

                          //     input.onchange = function() {
                          //     var file = this.files[0];
                          //     var reader = new FileReader();

                          //     reader.onload = function () {
                          //         var id = 'blobid' + (new Date()).getTime();
                          //         var blobCache =  this.activeEditor.editorUpload.blobCache;
                          //         var base64 = reader.result.split(',')[1];
                          //         var blobInfo = blobCache.create(id, file, base64);
                          //         blobCache.add(blobInfo);

                          //         // call the callback and populate the Title field with the file name
                          //         //cb(blobInfo.blobUri(), { title: file.name });
                          //     };
                          //     reader.readAsDataURL(file);
                          // }
                          // },
                        }}
                        onEditorChange={handleEditorChange}
                      />
                    </div>
                    <div class="form-group">
                      <div class="btn btn-default btn-file">
                        <i class="fas fa-paperclip"></i> Attachment
                        <input type="file" name="attachment" />
                      </div>
                      <p class="help-block">Max. 32MB</p>
                    </div>
                  </div>

                  <div class="card-footer">
                    <div class="float-right">
                      <button type="button" class="btn btn-default">
                        <i class="fas fa-pencil-alt"></i> Draft
                      </button>
                      <button type="submit" class="btn btn-primary">
                        <i class="far fa-envelope" onClick={handleSubmit}></i>{" "}
                        Send
                      </button>
                      <button type="submit" class="btn btn-info">
                        <i class="far fa-envelope" onClick={handleSubmit}></i>{" "}
                        Send to All
                      </button>
                    </div>
                    <button type="reset" class="btn btn-default">
                      <i class="fas fa-times"></i> Discard
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  ));
}
