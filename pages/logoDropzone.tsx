import Image from "next/image";
import styles from "../styles/logoDropzone.module.scss";
import { useState } from "react";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { useLogo } from "../Components/Context";
import { useTemplate } from "../Components/Context";

function LogoDropzone() {
  const { setLogo } = useLogo();

  const [uploadedLogo, setUploadedLogo] = useState([]);

  const onDrop = useCallback((acceptedFiles: any) => {
    setUploadedLogo(
      acceptedFiles.map((file: Blob | MediaSource) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      )
    );
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  uploadedLogo.map((file: any) => setLogo(file.preview));

  return (
    <div>
      <p className={styles.subTitles}>Upload image</p>

      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={styles.uploadBox}>
          <div className={styles.uploadLogoBox}>
            <Image src="/imgLogo.svg" height={36} width={36} />
          </div>
          <div>
            <Image src="/uploadLogo.svg" width={18} height={18} />
            <p>
              Drop your image here or <span>upload</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoDropzone;
