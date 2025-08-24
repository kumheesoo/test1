import React, { useState } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  color: #1e3a8a;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

const Description = styled.div`
  color: #333;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
  text-align: center;
`;

const UploadSection = styled.div`
  margin-bottom: 30px;
`;

const UploadButton = styled.button`
  width: 100%;
  padding: 15px;
  border: 2px dashed #d1d5db;
  border-radius: 8px;
  background: white;
  color: #6b7280;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
  transition: all 0.2s;

  &:hover {
    border-color: #3b82f6;
    color: #3b82f6;
  }
`;

const FileSizeInfo = styled.div`
  text-align: right;
  color: #6b7280;
  font-size: 12px;
  margin-bottom: 15px;
`;

const CategoryButton = styled.button`
  width: 100%;
  padding: 15px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: white;
  color: #6b7280;
  font-size: 14px;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s;

  &:hover {
    border-color: #3b82f6;
    color: #3b82f6;
  }
`;

const ReporterSection = styled.div`
  margin-bottom: 30px;
`;

const ReporterInfo = styled.div`
  color: #333;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

const NicknameInput = styled.input`
  flex: 1;
  padding: 12px;
  border: none;
  border-bottom: 2px solid #d1d5db;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-bottom-color: #3b82f6;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  color: #333;
  font-size: 14px;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #2563eb;
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }
`;

const Icon = styled.span`
  font-size: 18px;
`;

const WarningSignModal = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [nickname, setNickname] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.size <= 10 * 1024 * 1024) { // 10MB 제한
      setSelectedFile(file);
    } else {
      alert('파일 크기는 10MB 이하여야 합니다.');
    }
  };

  const handleSubmit = () => {
    if (!selectedFile) {
      alert('경고문 이미지를 업로드해주세요.');
      return;
    }
    if (!selectedCategory) {
      alert('카테고리를 선택해주세요.');
      return;
    }
    if (!isAnonymous && !nickname.trim()) {
      alert('닉네임을 입력하거나 익명 제보를 선택해주세요.');
      return;
    }

    // 여기에 실제 제출 로직을 추가할 수 있습니다
    console.log('제출 데이터:', {
      file: selectedFile,
      category: selectedCategory,
      nickname: isAnonymous ? '익명' : nickname,
      isAnonymous
    });

    alert('경고문이 성공적으로 제보되었습니다!');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Title>골목의 다양한 경고문을 기다립니다.</Title>
        
        <Description>
          여러분들이 보고 찍은 경고문을 보내주세요.<br />
          순차적으로 확인 후 부착하겠습니다.<br />
          중복된 경고문은 부착되지 않으니 미리 검색해서 확인해 주세요.
        </Description>

        <UploadSection>
          <UploadButton onClick={() => document.getElementById('fileInput').click()}>
            <Icon>📷</Icon>
            경고문 이미지 업로드
          </UploadButton>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
          <FileSizeInfo>최대 10MB</FileSizeInfo>
          
          <CategoryButton onClick={() => {
            const categories = ['교통', '안전', '환경', '기타'];
            const category = prompt('카테고리를 선택하세요:\n' + categories.join(', '));
            if (categories.includes(category)) {
              setSelectedCategory(category);
            }
          }}>
            {selectedCategory ? `선택된 카테고리: ${selectedCategory}` : '카테고리 선택'}
          </CategoryButton>
        </UploadSection>

        <ReporterSection>
          <ReporterInfo>
            제보받은 경고문일 경우 제보자의 닉네임을 함께 적고 있어요.<br />
            원치 않으시면 익명 제보를 선택해 주세요.
          </ReporterInfo>
          
          <InputGroup>
            <NicknameInput
              type="text"
              placeholder="닉네임 입력"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              disabled={isAnonymous}
            />
            <CheckboxGroup>
              <Checkbox
                type="checkbox"
                id="anonymous"
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
              />
              <CheckboxLabel htmlFor="anonymous">익명 제보</CheckboxLabel>
            </CheckboxGroup>
          </InputGroup>
        </ReporterSection>

        <SubmitButton onClick={handleSubmit}>
          제보하기
        </SubmitButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default WarningSignModal;
