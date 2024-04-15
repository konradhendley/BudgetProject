//budgets.js
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { jwtDecode } from 'jwt-decode';
import Footer from './Footer';

const Budgets = () => {
    const [formData, setFormData] = useState({
        budgetName: "",
        incomeTotal: 0,
        expenseTotal: 0,
        remainingAmount: 0,
        active: 1,
        budgetItems: []
    });

    // Function to handle input changes
    // Function to handle input changes
    const handleChange = (e, field, index, transactionType) => {
        const { name, value, type, checked } = e.target;
        const filteredItems = formData.budgetItems.filter(item => item.transactionType === transactionType);
        const itemIndex = formData.budgetItems.indexOf(filteredItems[index]);

        setFormData(prevFormData => ({
            ...prevFormData,
            budgetItems: prevFormData.budgetItems.map((item, i) =>
                i === itemIndex ? { ...item, [name]: type === 'checkbox' ? checked : value } : item
            )
        }));
    };


    // Add item
    const addItem = (category) => {
        if (category === 'income') {
            setFormData(prevFormData => ({
                ...prevFormData,
                budgetItems: [
                    ...prevFormData.budgetItems,
                    { name: '', amount: 0, transactionType: 'income' }
                ]
            }));
        } else if (category === 'expense') {
            setFormData(prevFormData => ({
                ...prevFormData,
                budgetItems: [
                    ...prevFormData.budgetItems,
                    { name: '', amount: 0, recurring: false, frequency: '', transactionDate: '', transactionType: 'expense' }
                ]
            }));
        }
        console.log("Item list (add):", formData.budgetItems)
    };

    // Remove item
    const removeItem = (transactionType, index) => {
        const filteredItems = formData.budgetItems.filter(item => item.transactionType === transactionType);
        const itemIndex = formData.budgetItems.indexOf(filteredItems[index]);
        
        setFormData(prevFormData => ({
            ...prevFormData,
            budgetItems: prevFormData.budgetItems.filter((_, i) => i !== itemIndex)
        }));
    };

    // Form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/budget', formData);
        } catch (error) {
        }
    };

    // Calculate total income, expenses, and remaining amount 
    const totalIncome = formData.budgetItems.reduce((total, item) => {
        if (item.transactionType === 'income') {
            return total + Number(item.amount);
        } else {
            return total;
        }
    }, 0);
    
    const totalExpenses = formData.budgetItems.reduce((total, item) => {
        if (item.transactionType === 'expense') {
            return total + Number(item.amount);
        } else {
            return total;
        }
    }, 0);
    const remainingAmount = totalIncome - totalExpenses;
    
    return (
        <div className='wrapper'>
            <div className='content-container'>
                <div className="budget-card">
                    <h2>Create a Budget</h2>
                    <h2>{formData.budgetName}</h2>
                    <form className="budget-form" onSubmit={handleSubmit}>
                    <div class="input-container">
                        <h6>Title: </h6><input className='input-field-line' type="text" name="budgetName" value={formData.budgetName} onChange={(e) => setFormData({ ...formData, budgetName: e.target.value })} />
                    </div>
                        <label><h4>Incomes</h4></label>
                        <ul className="subcategories-list">
                            <li className="subcategory-container">
                            <div className="subcategory-items">
                                {formData.budgetItems.filter(item => item.transactionType === 'income').map((item, index) => (
                                    <div key={index} className='item'>
                                        <h6>Income Name</h6>
                                        <input className='input-field' type="text" name="name" value={item.name} onChange={(e) => handleChange(e, 'name', index, item.transactionType)} />
                                        <h6>Amount</h6>
                                        <input className='input-field' type="number" name="amount" value={item.amount} onChange={(e) => handleChange(e, 'amount', index, item.transactionType)} />
                                        <div className="recurring-container">
                                                <h6>Recurring</h6>
                                                <input className='checkbox-field' type="checkbox" name="recurring" checked={item.recurring} onChange={(e) => handleChange(e, 'recurring', index, item.transactionType)} />
                                            </div>
                                            {item.recurring && (
                                                <div className='item'>
                                                    <h6>Frequency</h6>
                                                    <input className='input-field' type="text" name="frequency" value={item.frequency} onChange={(e) => handleChange(e, 'frequency', index, item.transactionType)} />
                                                    <h6>Date of Occurrence</h6>
                                                    <input className='input-field' type="date" name="date" value={item.transactionDate} onChange={(e) => handleChange(e, 'transactionDate', index, item.transactionType)} />
                                                </div>
                                            )}
                                        <button className="remove-button" type ="button" onClick={() => removeItem('income', index)}>Remove</button>
                                    </div>
                                ))}
                                <button className="add-button" type ="button" onClick={() => addItem('income')}>Add Item</button>
                                </div>
                            </li>
                        </ul>
                        {/* Expenses */}
                        <label><h4>Expenses</h4></label>
                        <ul className="subcategories-list">
                            <li className="subcategory-container">
                                <div className="subcategory-items">
                                    {formData.budgetItems.filter(item => item.transactionType === 'expense').map((item, index) => (
                                        <div key={index} className='item'>
                                            <h6>Expense Name</h6>
                                            <input className='input-field' type="text" name="name" value={item.name} onChange={(e) => handleChange(e, 'name', index, item.transactionType)} />
                                            <h6>Amount</h6>
                                            <input className='input-field' type="number" name="amount" value={item.amount} onChange={(e) => handleChange(e, 'amount', index, item.transactionType )} />
                                            <div className="recurring-container">
                                                <h6>Recurring</h6>
                                                <input className='checkbox-field' type="checkbox" name="recurring" checked={item.recurring} onChange={(e) => handleChange(e, 'recurring', index, item.transactionType)} />
                                            </div>
                                            {item.recurring && (
                                                <div className='item'>
                                                    <h6>Frequency</h6>
                                                    <input className='input-field' type="text" name="frequency" value={item.frequency} onChange={(e) => handleChange(e, 'frequency', index, item.transactionType)} />
                                                    <h6>Date of Occurrence</h6>
                                                    <input className='input-field' type="date" name="date" value={item.transactionDate} onChange={(e) => handleChange(e, 'transactionDate', index, item.transactionType)} />
                                                </div>
                                            )}
                                            <button className="remove-button" type ="button" onClick={() => removeItem('expense', index)}>Remove</button>
                                        </div>
                                    ))}
                                    <button className="add-button" type ="button" onClick={() => addItem('expense')}>Add Item</button>
                                </div>
                            </li>
                        </ul>
 
                        <div className="totals-container">
                            <div className="total-field">
                                <div>
                                    <label><h6>Total Income:</h6></label>
                                    <input className='input-field' type="text" value={totalIncome} readOnly />
                                </div>
                                <div>
                                    <label><h6>Total Expenses:</h6></label>
                                    <input className='input-field' type="text" value={totalExpenses} readOnly />
                                </div>
                                <div>
                                    <label><h6>Remaining Amount:</h6></label>
                                    <input className='input-field' type="text" value={remainingAmount} readOnly />
                                </div>
                            </div> 
                        </div>
                        <div className = "button-container">
                        <button type="submit" text-align="right">Save</button>
                        </div>   
                    </form>
                        
                </div>
            </div>
            <Footer />
        
        
      </div>
      );
  };
  
  export default Budgets;