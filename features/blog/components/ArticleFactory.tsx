"use client";
import React, { useEffect, useRef, useState } from "react";
import { Article } from "../types/Article";
import slugify from "slugify";
import { Button, Form, Input } from "antd";
import { FormProps } from "antd/es/form/Form";
import { Editor } from "@tinymce/tinymce-react";;

const { Item, useForm, useWatch } = Form;
const { TextArea } = Input;

const ArticleFactory = () => {
  const [form] = useForm<Article>();
  const editorRef = useRef<Editor | null>(null);

  const [isEdittingSlug, setIsEdittingSlug] = React.useState<boolean>(false);

  const onSubmit: FormProps<Article>["onFinish"] = async (data) => {
    console.log({
      ...data,
      content: editorRef.current?.editor?.getContent() || "",
    });
  };

  const titleValue = useWatch("title", form);

  useEffect(() => {
    if (!isEdittingSlug) {
      form.setFieldValue(
        "slug",
        slugify(titleValue || "", {
          locale: "vi",
          trim: true,
          lower: true,
        })
      );
    }
  }, [titleValue, isEdittingSlug]);

  return (
    <div className="flex flex-row justify-center py-10">
      <Form<Article>
        name="post-editer"
        form={form}
        onFinish={onSubmit}
        autoComplete="off"
        className="w-[1024px] py-10"
        labelCol={{ span: 4 }}
        layout="horizontal"
        size="large"
      >
        <Item
          name="title"
          label="Tiêu đề bài viết"
          rules={[{ required: true, message: "Bài viết cần một tiêu đề" }]}
        >
          <Input />
        </Item>
        <Item
          name="description"
          label="Mô tả ngắn cho bài viết"
          rules={[
            { required: true, message: "Hãy thêm mô tả ngắn cho bài viết" },
          ]}
        >
          <TextArea />
        </Item>
        <Item
          name="slug"
          label="Đường dẫn"
          rules={[
            { required: true, message: "Đường dẫn bài viết bắt buộc phải có" },
          ]}
        >
          <Input disabled={!isEdittingSlug} />
        </Item>
        <Item name="content" wrapperCol={{ offset: 4 }}>
          <Editor
            ref={editorRef}
            apiKey="xmr8p2ip3ullgp6p6154dr4te4hiwq8ifd81nussxhhuwir7"
            initialValue=""
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "anchor",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "file"
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent file image | " +
                "removeformat | help",
              images_file_types: "jpg,svg, png,webp",
            }}
          />
        </Item>
        <Item wrapperCol={{ offset: 4, span: 4 }}>
          <Button type="primary" htmlType="submit">
            Tạo bài viết
          </Button>
        </Item>
      </Form>
    </div>
  );
};

export default ArticleFactory;
