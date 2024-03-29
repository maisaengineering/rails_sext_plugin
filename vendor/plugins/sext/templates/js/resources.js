/**
 * sExt - scaffolding for ExtJS 
 * 
 *
 * @authors   Hugh Bien and Christopher Stotts 
 * @website   http://www.telaeris.com/
 * @date      8. June 2008
 * @version   1.0
 *
 * @ExtJS license   This code uses the ExtJS libraries for interface functionality.
 *  				The ExtJS libraries included in sExt are covered under the 
 					LGPL for (ExtJS version <= 2.0.2):  http://www.gnu.org/licenses/lgpl.html
 *   				or the GPL(ExtJSv >= 2.1):  http://www.gnu.org/licenses/gpl.html
 * Further ExtJS Licensing info can be found at http://www.extjs.com/license/
 *
 * @license   sExt is licensed under the terms of MIT License
 * 
 * The MIT License
 * 
 * Copyright (c) 2008 Telaeris Inc.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * The `appliction` module handles initialization of the application.
 * By Default, it will open the users resource
 */
 telaeris.resources({ 
    resources: {
      title: 'All Resources',
      isHeader: true
  }
});
  
telaeris.resources({ 
    users: {
      icon: 'user.png',
      gridFields: [
        'first_name',
        'last_name',
        'email',
        {id: 'created_at', renderer: telaeris.util.dateFormat},
        {id: 'updated_at', renderer: telaeris.util.dateFormat}
      ],
      formFields: [
        'first_name',
        'last_name',
        'mi',
        'login',
        { xtype: 'textfield', inputType: 'password', name: 'password' },
        { xtype: 'textfield', inputType: 'password', name: 'password_confirmation'},
        'email',
        'telephone',
        'fax',
        'cell'
      ]
    }
});
