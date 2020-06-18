import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from '@utils/icon';
import PropTypes from 'prop-types';
import Link from 'next/link';
import dropdownData from './temp-dropdown.json';

const Dropdown = () => {
    const [isData, setData] = useState(dropdownData);
    const [isSelect, setSelect] = useState(dropdownData.selected);

    const DropdownMenu = styled.button`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 240px;
        height: 50px;
        background: white;
        color: #18a0fb;
        font-size: 15px;
        outline: none;
        border: 1px solid #e4e4e4;
        border-radius: 5px;
    `;

    const DropdownMenuContent = styled.div`
        display: flex;
        align-items: center;
    `;

    const SelectedItem = styled.span`
        padding-left: 8px;
    `;

    const OptionEllipse = styled.div`
        width: 8px;
        height: 8px;
        border: 2px solid;
        border-color: ${(props) => props.todoDegree};
        border-radius: 50%;
        background: white;
    `;

    const OptionContent = styled.div`
        display: flex;
        align-items: center;
        padding-left: 40px;
        cursor: pointer;
    `;

    const OptionText = styled(SelectedItem)`
        font-size: 13px;
        line-height: 19px;
        color: #334d6e;
        letter-spacing: 0.01em;
    `;

    const handleSelect = () => {
        setSelect(!isSelect);
    };

    return (
        <>
            <DropdownMenu>
                <DropdownMenuContent>
                    <Icon icon="calendar" size={24} color={'#999999'} />
                    <SelectedItem>Takvim</SelectedItem>
                </DropdownMenuContent>
                <Icon icon={isSelect ? 'ctrl-reverse' : 'ctrl'} size={24} color={'#999999'} onClick={handleSelect} style={{ cursor: 'pointer' }} />
            </DropdownMenu>
            {isSelect &&
                Array.isArray(isData) &&
                isData.length > 0 &&
                isData.map((item, index) => (
                    <Link href={item.slug} key={index}>
                        <a>
                            <OptionContent key={index}>
                                <OptionEllipse todoDegree={item.todoDegree} />
                                <OptionText>{item.option}</OptionText>
                            </OptionContent>
                        </a>
                    </Link>
                ))}
        </>
    );
};

Dropdown.propTypes = {
    todoDegree: PropTypes.string.isRequired,
};
export default Dropdown;
