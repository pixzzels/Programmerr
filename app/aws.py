import boto3
import os
import uuid

S3_LOCATION = f"https://programmerrbucket.s3.amazonaws.com/"
ALLOWED_EXTENSIONS_IMG = {"pdf", "png", "jpg", "jpeg", "gif"}
ALLOWED_EXTENSIONS_MOV = {"mp4", "mov", "webm"}


s3 = boto3.client(
    "s3",
    aws_access_key_id=os.environ.get("AWS_ACCESS_KEY_ID"),
    aws_secret_access_key=os.environ.get("AWS_ACCESS_KEY_SECRET")
)


def allowed_file_img(filename):
    return "." in filename and \
           filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS_IMG

def allowed_file_mov(filename):
    return "." in filename and \
           filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS_MOV


def upload_file_img(file, acl="public-read"):
    try:
        s3.upload_fileobj(
            file,
            "programmerrbucket",
            file.filename,
            ExtraArgs={
                "ACL": acl,
                "ContentType": file.content_type
            }
        )
    except Exception as e:
        # in case the our s3 upload fails
        return {"errors": str(e)}

    return {"url": f"{S3_LOCATION}{file.filename}"}


def delete_file_img(key):
    try:
        s3.delete_object(Bucket='numizmat', Key=key)
    except Exception as e:
        # in case the our s3 upload fails
        return {"errors": str(e)}

    return {"success": "success"}
