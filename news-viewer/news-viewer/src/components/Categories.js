import styled from "styled-components";
import { NavLink } from "react-router-dom";

const categories = [
    {
        name: 'all',
        text: 'All'
    },
    {
        name: 'business',
        text: 'Business'
    },
    {
        name: 'entertainment',
        text: 'Entertainment'
    },
    {
        name: 'health',
        text: 'Health'
    },
    {
        name: 'science',
        text: 'Science'
    },
    {
        name: 'sports',
        text: 'Sports'
    },
    {
        name: 'technology',
        text: 'Technology'
    }
];

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-y: auto;
    }
`;

const Category = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
        color: #495057;
    }

    &.active {
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
        &:hover {
            color: #3bc9db;
        }
    }

    & + & {
        margin-left : 1.5rem;
    }
`

const NewsTop = styled.h2`
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: #333333;
    margin-left : 60px;
`

const Categories = () => {
    return (
        <>
            <NewsTop>
                Hong's Patch
            </NewsTop>
            <hr />
            <CategoriesBlock>
                {categories.map(c => (
                    <Category 
                    key={c.name}
                    className = {({ isActive }) => (isActive ? 'active' : undefined)}
                    to={c.name === 'all' ? '/' : `/${c.name}`}
                    >
                    {c.text}
                    </Category>
                ))}
            </CategoriesBlock>
        </>
    )
}

export default Categories;